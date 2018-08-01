temple.Banner = ( function(_super) { 

	__extends(banner, _super);

	function banner() {
		_super.call(this, arguments[0]);
	}

	banner.prototype.init = function() {
		this.chain(this.setupBanner)
			.chain(this.show);
	}

	banner.prototype.setupBanner = function() {

		var today = new Date("1 July 2018");
		console.log(today.getTime());

    	orientationDIV = document.getElementById('orientationDIV');
    	mainContainer = document.getElementById('banner');
    	orientate = Enabler.getOrientation();

    	orientationDIV.innerHTML = "MODE: "+orientate.getMode()+" - DEGREES: "+orientate.getDegrees();
    	console.log("MODE: "+orientate.getMode()+" - DEGREES: "+orientate.getDegrees());

    	Enabler.addEventListener(studio.events.StudioEvent.ORIENTATION,
		function() {
		  if (orientate.getDegrees() == 90) {
		    orientationDIV.innerHTML = "MODE: "+orientate.getMode()+" - DEGREES: "+orientate.getDegrees();
		    mainContainer.style.backgroundColor = "#F00";
		  }
		  else if (orientate.getDegrees() == -90) {
		    orientationDIV.innerHTML = "MODE: "+orientate.getMode()+" - DEGREES: "+orientate.getDegrees();
		    mainContainer.style.backgroundColor = "#0F0";
		  }
		  else if (orientate.getDegrees() == 180 || orientate.getDegrees() == -180) {
		    orientationDIV.innerHTML = "MODE: "+orientate.getMode()+" - DEGREES: "+orientate.getDegrees();
		    mainContainer.style.backgroundColor = "#00F";
		  }
		  else {
		    orientationDIV.innerHTML = "MODE: "+orientate.getMode()+" - DEGREES: "+orientate.getDegrees();
		    mainContainer.style.backgroundColor = "#000";
		  }
		}, false);

    };

    banner.prototype.deviceOrientationListener = function(event) {
	  var c = document.getElementById("myCanvas");
	  var ctx = c.getContext("2d");

	  ctx.clearRect(0, 0, c.width, c.height);
	  ctx.fillStyle = "#FFF";
	  ctx.font = "15px Verdana";
	  ctx.fillText("Alpha: " + Math.round(event.alpha), 10, 20);
	  ctx.beginPath();
	  ctx.moveTo(180, 75);
	  ctx.lineTo(210, 75);
	  ctx.arc(180, 75, 60, 0, event.alpha * Math.PI / 180);
	  ctx.fill();

	  ctx.fillStyle = "#FFF";
	  ctx.fillText("Beta: " + Math.round(event.beta), 10, 140);
	  ctx.beginPath();
	  ctx.fillRect(180, 150, event.beta, 90);

	  ctx.fillStyle = "#FFF";
	  ctx.fillText("Gamma: " + Math.round(event.gamma), 10, 270);
	  ctx.beginPath();
	  ctx.fillRect(90, 340, 180, event.gamma);

	}

	window.addEventListener('deviceorientation', banner.prototype.deviceOrientationListener);


	return banner;

})( temple.Template );

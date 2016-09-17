document.addEventListener('DOMContentLoaded', function(){
	console.log("Ready!");

var seconds = 0;
var rotateIncrement = 0;
var random = 0;

var fire02 = document.getElementById("fire02");
var fire01 = document.getElementById("fire01");

var increment = 0;
var direction = 0;
var maxSize = 200;
var minSize = 80;


function timer() {
	setInterval(function(){
		seconds += 1;
		console.log(seconds);
		if(rotateIncrement < 2){
			rotateIncrement += 1;
			 clearInterval(timer)
		}
		else {
			rotateIncrement -= 2;
		}
		
		fire02.style.transform = "rotate(" + rotateIncrement + "deg)";
		fire02.style.WebkitTransform = "rotate(" + rotateIncrement + "deg)";
		fire01.style.transform = "rotate(" + rotateIncrement * -.5 + "deg)";
		fire01.style.WebkitTransform = "rotate(" + rotateIncrement * -.5 + "deg)";

	}, 50);
}

timer();
});
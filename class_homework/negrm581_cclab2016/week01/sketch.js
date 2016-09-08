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

// function timer() {
// 	setInterval(function(){
// 		seconds += 1;
// 		console.log(seconds);
// 		if(seconds == 100){
// 			clearInterval(timer)
// 		}
// 		random = mod(seconds);
// 		console.log("random: " + random);
// 		loadingScreen();
// 		rotateIncrement = seconds * 5;
// 		fire02.style.transform = "rotate(" + rotateIncrement + "deg)";
// 		fire02.style.WebkitTransform = "rotate(" + rotateIncrement + "deg)";
// 	}, 500);
// }

function pulsSize() {
	setInterval(function(){
		if(increment == 10){
			direction = -1;
		} else if (increment == 0){
			direction = 1;
		}
		increment += direction;
		console.log("Increment: " + increment);
		fire02.style.width = minSize * increment / 10 + "%";
		fire02.style.height = minSize * increment / 10 + "%";
		fire01.style.width = minSize * increment / 10 + "%";
		fire01.style.height = minSize * increment / 10 + "%";
	}, 500);
}

pulsSize();

});
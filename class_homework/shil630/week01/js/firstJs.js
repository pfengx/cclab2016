
document.addEventListener("DOMContentLoaded", function() {

var colorPool = ["#D9545B", "#21388C", "#F4BF23"]; 
var seconds = 0;
var size1 = 24;
var size2 = 80;
var state = 0;
var increment = 0;
var direction = 0;
var numOfColors = colorPool.length;
var rotateIncrement = 0;

//divs from DOM
var parentDiv = document.getElementsByClassName("blockContainer");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

function timer() {
	setInterval(function(){ 
		seconds += 1;
		console.log("seconds:" + seconds);
		//alert("Hello World!");
		if (seconds == 100){
			clearInterval(timer);
		}
		state = mod(seconds);
		rotateIncrement = seconds * 45;
		console.log("state: "+ state)
		loadingScreen();
		console.log(parentDiv);

		parentDiv[0].style.transform = "rotate(" + rotateIncrement + "deg)";
		parentDiv[0].style.WebkitTransform = "rotate(" + rotateIncrement + "deg)";
	}, 1000);
}

function mod(num){
	return num%numOfColors;
}

function loadingScreen(){

	div1.style.backgroundColor = colorPool[mod(state)];
	div2.style.backgroundColor = colorPool[mod(state+1)];
	div3.style.backgroundColor = colorPool[mod(state+2)];
}



timer();


function pulseSize(){
	setInterval(function(){

		if(increment == 10){
			direction = -1;
		} else if (increment ==0){
			direction = 1;
		}

		increment += direction;

		console.log("increment: " + increment);

		div1.style.width = size2 * increment / 10 + "%";
		div1.style.height = size1 * increment / 10 + "%";
		div2.style.width = size2 * increment / 10 + "%";
		div2.style.height = size1 * increment / 10 + "%";
		div3.style.width = size2 * increment / 10 + "%";
		div3.style.height = size2 * increment / 10 + "%";
	}, 100)
}

pulseSize();

});
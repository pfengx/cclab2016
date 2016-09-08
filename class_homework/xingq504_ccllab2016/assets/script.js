document.addEventListener('DOMContentLoaded', function(){

console.log("Ready!");

// variable

var colorPool = ["#801815", "#D46D6A", "#FFACAA"]; 
var seconds = 0;
var numOfColors = colorPool.length // name-of-the-array.length 
var rotateIncrement = 0; 
var random = 0;

var parentDiv = document.getElementById("wrapper");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

//pulse variables

var increment = 0;
var direction = 0;
var maxSize = 200;
var minSize = 20;

// create timer function
function timer(){
	setInterval(function(){
		seconds += 1; 
		if(seconds == 50){
			clearInterval(timer);
		}
		loadingScreen();
		random = mod(seconds);
		console.log("Random:" + random);
		loadingScreen();
		rotateIncrement = seconds * 45;
		parentDiv.style.transform = "rotate("+rotateIncrement+"deg)"; 
		parentDiv.style.WebkitTransform = "rotate("+rotateIncrement+"deg)"; 
		console.log("Degrees: rotate(" + rotateIncrement + "deg)"); 
	}, 1000);
}

function mod(num) {
	return num%numOfColors; 
}

// function that will load our changes to the divs
function loadingScreen(){
	div1.style.backgroundColor = colorPool[mod(random)];
	div2.style.backgroundColor = colorPool[mod(random+1)];
	div3.style.backgroundColor = colorPool[mod(random+2)];
}

// create pulse function
function pulseSize() {
	setInterval (function(){
		if(increment == 10) {
			direction = -1;
		} else if (increment == 0){
			direction = 1;
		}
		increment += direction;
		console.log("Increment:" +increment);
		div1.style.width = minSize * increment / 10 + "%"; 
		div1.style.height = minSize * increment / 10 + "%";
		div2.style.width = minSize * increment / 2 + "%"; 
		div2.style.height = minSize * increment / 2 + "%";
		div2.style.width = minSize * increment / 2 + "%"; 
		div2.style.height = minSize * increment / 2 + "%";

		

	
	}, 500);
}

pulseSize();
timer();

});
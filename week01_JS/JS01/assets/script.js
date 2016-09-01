document.addEventListener('DOMContentLoaded', function(){ // wait until all our DOM elements are loaded before running script

console.log("Ready!");

/* Different types of variables: 
	1. Arrays: var a = ["item 0", "item 1", "item 2"]
	2. Integers: var b = 0; var c = -10
	3. Floats: var d = 0.4; var e = 0.5151
	4. Strings: var f = "Hello World"
	5. Booleans: var g = true
*/
// variables
var colorPool = ["#000", "#ff0000", "#3e09f0"]; // console.log(colorPool[0]) you would get #b2ffe9
var seconds = 0;
var numOfColors = colorPool.length // name-of-the-array.length
var rotateIncrement = 0; 
var random = 0;

// variables holding our divs
var parentDiv = document.getElementById("wrapper");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

// variables for pulse function
var increment = 0;
var direction = 0;
var maxSize = 100;
var minSize = 45;

// 1. create timer function 
function timer() {
	setInterval(function(){
		seconds += 1; // seconds = seconds + 1;
		// console.log("Seconds:" + seconds);
		if(seconds == 100) {
			clearInterval(timer);
		}
		random = mod(seconds);
		// console.log("Random:" + random);
		loadingScreen();
		rotateIncrement = seconds * 90; 
		parentDiv.style.transform = "rotate("+rotateIncrement+"deg)"; // we are affecting the css of our parentDiv. This outputs: rotate(0deg); where the number changes as the variable changes
		console.log("Degrees: rotate(" + rotateIncrement + "deg)" );
	}, 1000);
}

// 2. create a function that randomizes numbers
function mod(num) {
	return num%numOfColors;
}

// function that will load our changes to the divs
function loadingScreen() {
	div1.style.backgroundColor = colorPool[mod(random)];  // we are changing the css background color. 
	div2.style.backgroundColor = colorPool[mod(random+1)]; 
	div3.style.backgroundColor = colorPool[mod(random+2)];
}

// create pulse function
function pulseSize() {
	setInterval(function() {
		if(increment == 10) {
			direction = -1;
		} else if (increment == 0) {
			direction = 1;
		}
		increment += direction;
		console.log("Increment: "+increment);

		div1.style.width = minSize * increment / 10 + "%";  
		div1.style.height = minSize * increment / 10 + "%";
		div2.style.width = minSize * increment / 10 + "%";  
		div2.style.height = minSize * increment / 10 + "%";
		div3.style.width = minSize * increment / 10 + "%";  
		div3.style.height = minSize * increment / 10 + "%";

		/* Using arrays, you can get similar results as copying and pasting with lest code. */

		// var divArray = [div1, div2, div3];
		// for(var i = 0; i<divArray.length; i++) {
		// 	divArray[i].style.width = minSize * increment / 10 + "%";
		// 	divArray[i].style.height = minSize * increment / 10 + "%";
		// }

	}, 500);
}

// Don't forget to call the functions!
pulseSize(); 
timer();
});
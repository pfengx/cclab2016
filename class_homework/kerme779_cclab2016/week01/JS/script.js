// variables
var seconds = 0;
var rotateIncrement = 0;

var animation = document.getElementById("flower");

var increment = 0;
var direction = 0;
var position = 0;



function timer () {
	setInterval(function() {
		seconds+=1; //seconds = seconds + 1'
		if(seconds == 100) {
			clearInterval(timer);
		}
	random = mod(seconds); //reassigning new number as passes through function
		console.log("Random:" + random)
		rotateIncrement = seconds * 15; //rotate 90 deg every second
		animation.style.transform = "rotate(" + rotateIncrement + "deg)"; 
		animation.style.WebkitTransform = "rotate(" + rotateIncrement + "deg)"; //css webkit for chrome, etc. browsers
		// console.log("Degrees: rotate(" + rotateIncrement + "deg)"); //need to add for -moz-, -ms-

	}, 1000);
}

//create a function that randomizes numbers 
function mod(num) {  //function will return null by default, unless you tell it to return something
	return num%rotateIncrement; //modula divides the value of first number by second number and then returns remainder

}

animation.style.transform = "translate(" + direction + "pos)"; //what is x and y in translate?
console.log("Position: translate(" + direction + "pos)");

// // create function to move flower to right
// function moveRight() {
// 	setInterval(function () {
// 		position+1;
// 		if(position == 500) {
// 			clearInterval(moveRight);
// 		}

// 		position = 
// 		animation.style.right = "translate(" + direction + "pos)";
// 		// if (increment == 10) {
// 		// 	// direction = 100;
// 		// } else if (increment == 0) {
// 		// 	direction = 1;
// 		// }
// 		// increment += direction;
// 		console.log("Increment:" +increment);
// 		// animation.style.width = minSize * increment / 10 +  "%";

// 	}, 500);  //grow and shrink in 500 milliseconds
// }

// moveRight();
timer();
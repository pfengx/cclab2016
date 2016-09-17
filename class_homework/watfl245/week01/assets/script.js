document.addEventListener('DOMContentLoaded', function(){

console.log("Ready!");

//GOAL
//animate one object
//when page loads cog rotates to the right
//create a star that spins to the right
//create a left that spins to the left estabblish after the first cog rotates properly


var looper; //rotate without a pause
var degrees = 0;
var speed = 40;e
//var setTimeout = "rotate"; // ** setTimeout is a predefined function name, so it can't be used as a variable name, therefore you can't assign it a function. 
// var x ;
// var saturnright = x;


//rotate id of image 1

function rotate(){
	setInterval(function() { // ** You were using setTimeout which runs once when the time gets to 0. What you're looking for is the setInterval function which runs at a certain interval that you set.
		var elem = document.getElementById('img1');
		// if(navigator.userAgent.match("Chrome")){
			elem.style.WebkitTransfrom = "rotate("+ degrees +"deg)";
		// }else {
			elem.style.transform = "rotate("+degrees+"deg)";
		// }

		degrees++;  // ** degrees++ was outside of the rotate function, so that it would only be called once, which means the star wouldn't turn. You need degrees to increase by one every time the function is called to increase the rotation per interval.
		
		if(degrees > 359){
			degrees = 0;
		}
		
	}, 1000);
	
}

// setTimeout (function() {
// 	var x = document.getElementById ();
// }
// looper = setTimeout(rotateSomething, 4000);

// document.getElementById("container").innerHTML = "rotate(" + degrees + "deg)";
// document.getElementById("img").innerHTML = "rotate(" + degrees + "deg)";

//execute line
// rotateAnimation();

rotate();
});
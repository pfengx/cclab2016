document.addEventListener('DOMContentLoaded', function(){

console.log("Ready!");

//GOAL
//animate one object
//when page loads cog rotates to the right
//create a star that spins to the right
//create a left that spins to the left estabblish after the first cog rotates properly


var looper; //rotate without a pause
var degrees = 0;
var speed = 40;
var setTimeout = "rotate";
// var x ;
// var saturnright = x;


//rotate id of image 1

function rotate(){
	setTimeout(function() {
		var elem = document.getElementById('container');
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransfrom = "rotate("+ degrees +"deg)";
	}else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	}, 1000);
	
}

// setTimeout (function() {
// 	var x = document.getElementById ();
// }
// looper = setTimeout(rotateSomething, 4000);

degrees++;
if(degrees > 359){
	degrees = 1;
}

// document.getElementById("container").innerHTML = "rotate(" + degrees + "deg)";
// document.getElementById("img").innerHTML = "rotate(" + degrees + "deg)";

//execute line
// rotateAnimation();

rotate();
});
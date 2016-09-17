
document.addEventListener("DOMContentLoaded",function(){



var colorPool = ['#B2FFE9','#B2BFFC','#F26969'];
var seconds = 0;
var size1 = 45;
var size2 = 100;
var state = 0;
var increment = 0;
var direction = 0;
var numOfColors = colorPool.length;
var rotateIncrement = 0;


var parentDiv = document.getElementsByClassName("blockContainer");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

function timer(){
	setInterval(function(){
		seconds += 1;
		console.log("seconds:" + seconds);

		if (seconds == 100){
			clearInterval(timer);
		}
		state = mod(seconds);
		rotateIncrement = seconds * 90;
		console.log("state "+state);
		loadingScreen();
		console.log(parentDiv);

		parentDiv[0].style.transform = "rotate(" + rotateIncrement + "deg)";
		parentDiv[0].style.WebkitTransform = "rotate(" + rotateIncrement + ")";
	},1000);
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

});






document.addEventListener('DOMContentLoaded', function(){

// console.log("Ready!");

var colorPool = ["red", "green", "blue"];
var dotPool = [" ", ".", "..", "..."];

var seconds = 0;
var increment = 0;
var changeColor = 0;
var addDot = 0;

var rect = document.getElementById("rect");
var loading = document.getElementById("loading");

function timer(){
	setInterval(function(){
		seconds += 1; 
		addDot += 1;
		
		if(addDot == 4){
			addDot = 0;
		}
		
		if(seconds == 8){
			seconds = 1;
			changeColor += 1;
		
			if(changeColor == 3){
				changeColor = 0;
			}
		
		rect.style.backgroundColor = colorPool[changeColor];
		
		}
		
		increment = seconds * 1.5;
		rect.style.transform = "scale("+increment+", "+increment+")";
		loading.innerHTML = "Loading" + dotPool[addDot];
	
	}, 1000);
}

timer();

});
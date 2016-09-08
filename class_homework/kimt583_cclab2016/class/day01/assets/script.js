document.addEventListener('DOMContentLoaded',function(){

	console.log("Ready!");

// variables
var colorPool = ["#9df9f2","#b2bffc","#f25930"];
var seconds = 0;
var numOfColors = colorPool.length;
var rotateIncrement = 0;
var random = 0;

var divScale=0;

var parentDiv = document.getElementById("wrapper");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

// pulse variables
var increment = 0;
var direction =0;
var maxSize=100;
var minSize=45;


// create timer
function timer(){
	setInterval(function(){
		seconds+=1;
		// console.log("Second:"+seconds);
		if(seconds == 100){
			clearInterval(timer);
		}
		
		random = mod(seconds);
		// console.log("Random:"+random);
		loadingScreen();
		rotateIncrement=seconds*90;
		parentDiv.style.transform = "rotate(" + rotateIncrement +"deg)"; 
		parentDiv.style.WebkitTransform = "rotate(" + rotateIncrement +"deg)"; 
		console.log("Degree: rotate(" + rotateIncrement +"deg)");
	},1000);
}

function mod(num){
	return num%numOfColors;
}
// create a function that randomizes numbers
function loadingScreen(){
	div1.style.backgroundColor = colorPool[mod(random)];
	div2.style.backgroundColor = colorPool[mod(random+1)];
	div3.style.backgroundColor = colorPool[mod(random+2)];
}
// create pulse function
function pulseSize(){
	setInterval(function(){
		if(increment ==10){
			direction =-1;
		}else if(increment==0){
			direction=1;
		}
		increment +=direction;
		console.log("increment:"+increment);
		
		var divArray = [div1, div2, div3];
		for(var i=0;i<divArray.length;i++){
			divArray[i].style.width = minSize*increment/10+"%";
			divArray[i].style.height = minSize*increment/10+"%";
		}

	},500);
}

// function that will load our changes to the divs
pulseSize();
timer();

});
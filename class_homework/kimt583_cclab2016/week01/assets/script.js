document.addEventListener('DOMContentLoaded',function(){

	console.log("Ready!");

	var colorPool = ["#F10000","#FF4900","#FFDB00","#1F7B0E","#014FB3","#7B01B3"];
	var seconds = 0;
	var numOfColors = colorPool.length;
	var random = 0;

	var rotateIncrement=0;

	var parentDiv = document.getElementById("wrapper");
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");

	function mod(num){
		return num%numOfColors;
	}

	function rotateDiv(divName){
		setInterval(function(){
			rotateIncrement+=10;

			divName.style.transform="rotate(" + rotateIncrement + "deg)";
		// div1.style.WebkitTransform = "rotate(" + rotateIncrement +"deg)"; 		
		// console.log("Degree: rotate(" + rotateIncrement +"deg)");
	},50);
	}

	
	// create pulse function
	function pulseSize(divName, increment){
		var scaleIncrement = 0;
		var direction =0;
		var Size=45;

		setInterval(function(){
			if(scaleIncrement ==increment){
				direction =-1;
			}else if(scaleIncrement==0){
				direction=1;
			}
			scaleIncrement +=direction;
			console.log("increment:"+scaleIncrement);
			divName.style.transformOrigin="center";

			divName.style.width = Size*scaleIncrement/10+"%";
			divName.style.height = Size*scaleIncrement/10+"%";

		},90);
	}

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
		rotateIncrement=seconds*10;
		parentDiv.style.transform = "rotate(" + rotateIncrement +"deg)"; 
		parentDiv.style.WebkitTransform = "rotate(" + rotateIncrement +"deg)"; 
		console.log("Degree: rotate(" + rotateIncrement +"deg)");
	},90);
	}

	// create a function that randomizes numbers
	function loadingScreen(){
		div1.style.backgroundColor = colorPool[mod(random)];
		div2.style.backgroundColor = colorPool[mod(random+1)];
		div3.style.backgroundColor = colorPool[mod(random+2)];
	}

	function mod(num){
		return num%numOfColors;
	}

	rotateDiv(div1);
	rotateDiv(div2);
	rotateDiv(div3);

	pulseSize(div1,24);
	pulseSize(div2,29);
	pulseSize(div3,19);

	timer();

});


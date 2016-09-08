document.addEventListener('DOMContentLoaded',function(){
	console.log("Ready!");

	//variables
	var colorPool = ["#b2ffe9","#66ccff","#f26969"];//colorPool[0]
	var seconds = 0;
	var numOfColors = colorPool.length;// name-of-the-array.length
	var rotateIncrement = 0;
	var random = 0;
	var parentDiv = document.getElementById("wrapper");
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	var div3 = document.getElementById("div3");
	var s1 = document.getElementById("s1");
	var increment = 0;
	var direction = 0;
	var maxSize = 100;
	var minSize= 45;
	var posx = 1;
	var posy = 135;
	var widths1 = 23;
	var height1 = 23;
	s1.style.opacity = 0;

	//create timer function
	function timer(){
		setInterval(function(){
			seconds+=1;
			// posy-=20
			console.log(seconds);
			if(seconds == 100){
				clearInterval(timer);
			};
			random = mod(seconds);
			console.log("Random:"+random);
			loadingScreen();
			rotateIncrement= seconds * 90;
			parentDiv.style.transform="rotate("+rotateIncrement+"deg)";
			parentDiv.style.WebkitTransform="rotate("+rotateIncrement+"deg)";//css webkit for chrome
			// s1.style.left = posx+'px';
			// s1.style.top = posy+'px';
			console.log("Degrees:rotate("+rotateIncrement+"deg)");//-moz-,-ms-
		},1000);
	};
	//create a function that randomizes numbers
	function timer2(){
		
		setInterval(function(){
			s1.style.opacity-=0.15;
			seconds+=1;
			posy-=20
			widths1 += 5;
			height1 += 5;
			console.log(seconds);
			if(seconds%9 == 0){
				clearInterval(timer);
				posx = 1;
				posy = 135;
				widths1 = 23;
				height1 = 23;
				s1.style.opacity = 1;
			};
			s1.style.left = posx+'px';
			s1.style.top = posy+'px';
			s1.style.width = widths1+'px';
			s1.style.height = height1+'px';
		},300);
	};
	function mod(num){
		return num%numOfColors;
	};
	function loadingScreen(){
		div1.style.backgroundColor = colorPool[mod(random)];
		div2.style.backgroundColor = colorPool[mod(random+1)];
		div3.style.backgroundColor = colorPool[mod(random+2)];
	};
	//create pulse function
	function pulseSize(){
		setInterval(function(){
			if(increment == 10){
				direction = -1;
			} else if(increment == 0){
				direction = 1;
			};
			increment += direction;
			console.log("Increment:"+increment);
			// div1.style.width = maxSize*increment/10+"%";
			// div2.style.width = maxSize*increment/10+"%";
			// div3.style.width = maxSize*increment/10+"%";
			// div1.style.height = minSize*increment/10+"%";
			// div2.style.height = minSize*increment/10+"%";
			// div3.style.height = minSize*increment/10+"%";
		},500);
	};

	//function that will load our changes to the divs
	pulseSize();
	timer();
	timer2()

});
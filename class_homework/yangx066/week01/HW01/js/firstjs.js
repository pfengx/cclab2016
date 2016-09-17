document.addEventListener("click",function(){

	var colorpool = ["#ffcf03","#ff2f0d","#19db46","#3976ff"];
	console.log(colorpool[0])
	var seconds=0;
	var random = 0;
	var rotateIncrement = 0;
	var numOfColors = colorpool.length;

	var alldiv = document.getElementById("all");
	var leftdiv = document.getElementById("triangle-left");
	var topdiv = document.getElementById("triangle-top");
	var rightdiv = document.getElementById("triangle-right");
	var bottomdiv = document.getElementById("triangle-bottom");

	function timer(){
		setInterval(function(){
			seconds += 1;
			random = mod(seconds);
			changeColor();
			rotateIncrement = seconds * 1;
			alldiv.style.transform = "rotate("+rotateIncrement+"deg)";
		},1)



	}

	function mod(num){
		return(num%numOfColors);
	};

	function changeColor(){
		leftdiv.style.borderTopColor = colorpool[mod(random)];
		topdiv.style.borderRightColor = colorpool[mod(random+1)];
		rightdiv.style.borderBottomColor = colorpool[mod(random+2)];
		bottomdiv.style.borderLeftColor = colorpool[mod(random+3)];
	};

	// };


	timer();

})
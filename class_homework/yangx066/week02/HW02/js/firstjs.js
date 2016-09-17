var face = ["face1","face2","face3","face4","face5","face6","face7","face8","face9"];
var hair = ["hair1","hair2","hair3","hair4","hair5","hair6","hair7","hair8","hair9"];
var eye = ["eye1","eye2","eye3","eye4","eye5","eye6","eye7","eye8","eye9"];
var nose = ["nose1","nose2","nose3","nose4","nose5","nose6","nose7","nose8","nose9"];
var mouth = ["mouth1","mouth2","mouth3","mouth4","mouth5","mouth6","mouth7","mouth8","mouth9"];
var background = ["#ff6656","#5696f4","#ef8194","#31e5f7","#29ed86"];


var faceNumber = 0;
var hairNumber = 0;
var eyeNumber = 0;
var noseNumber = 0;
var mouthNumber = 0;
var colorNumber = 0;

function changeColor(){
	colorNumber += 1;
	if (colorNumber == 5){
		colorNumber = 0;
	};
	console.log("colorNumber:" + colorNumber);

	$('#background').css('background-color',background[colorNumber]);
	$('#background').css('background-size',"100% auto");
	console.log(background[colorNumber]);
}


function changeFace(){
	faceNumber += 1;
	if (faceNumber == 9){
		faceNumber = 0;
	};

	console.log("faceNumber:" + faceNumber);

	$('#face').css('background','url("image/'+ face[faceNumber] + '.png") no-repeat');
	$('#face').css('background-size',"100% auto");
}

function changeHair(){
	hairNumber += 1;
	if (hairNumber == 9){
		hairNumber = 0;
	};

	console.log("hairNumber:" + hairNumber);

	$('#hair').css('background','url("image/'+ hair[hairNumber] + '.png") no-repeat');
	$('#hair').css('background-size',"100% auto");
}

function changeEye(){
	eyeNumber += 1;
	if (eyeNumber == 9){
		eyeNumber = 0;
	};

	console.log("eyeNumber:" + eyeNumber);

	$('#eye').css('background','url("image/'+ eye[eyeNumber] + '.png") no-repeat');
	$('#eye').css('background-size',"100% auto");
}

function changeNose(){
	noseNumber += 1;
	if (noseNumber == 9){
		noseNumber = 0;
	};

	console.log("noseNumber:" + noseNumber);

	$('#nose').css('background','url("image/'+ nose[noseNumber] + '.png") no-repeat');
	$('#nose').css('background-size',"100% auto");
}

function changeMouth(){
	mouthNumber += 1;
	if (mouthNumber == 9){
		mouthNumber = 0;
	};

	console.log("mouthNumber:" + mouthNumber);

	$('#mouth').css('background','url("image/'+ mouth[mouthNumber] + '.png") no-repeat');
	$('#mouth').css('background-size',"100% auto");
}

function clickColor(){
	$('#eye').click(function(){
    	changeColor();
    });
}

function clickFace(){
	console.log("ready!");

    $('#submitFace').click(function(){
    	changeFace();
    });
}

function clickHair(){
	console.log("ready!");

    $('#submitHair').click(function(){
    	changeHair();
    });
}

function clickEye(){
	console.log("ready!");

    $('#submitEye').click(function(){
    	changeEye();
    });
}

function clickNose(){
	console.log("ready!");

    $('#submitNose').click(function(){
    	changeNose();
    });
}

function clickMouth(){
	console.log("ready!");

    $('#submitMouth').click(function(){
    	changeMouth();
    });
}


$(document).ready(function(){
	clickFace();
	clickHair();
	clickEye();
	clickNose();
	clickMouth();
	clickColor();
});

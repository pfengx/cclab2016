// variables
var replies = ["Yes","No","How should I know?","Feed me and then I'll  tell you.","Maaaybe"];
var sound = ["yes","no","how","feedme","maybe"];
var eyes = ["eyes","eyes2","eyes3","eyes4","eyes5","eyes6","eyes7"];
var randomNum = 0;
var randomEyes = 0;
var audioElement;

// play sounds function
function playSounds(r){
	audioElement.setAttribute('src','assets/sound/'+sound[r]+'.mp3');
	audioElement.play();
}
// generate random number
function randomNumGenerator(arrayName){
	return Math.floor(Math.random()*arrayName.length); 
	//Math.random generates a random value between (0,1);
	//replies.length = 4;
	//Math.floor returns a number representing the largest integer less than or equal to specified number


}

// answer question function
function answerQuestions(){
	randomNum = randomNumGenerator(replies);
	console.log("Random Reply Num" + randomNum);

	//vanille js: document.getElementById("speech").textContent = replie[randomNum];
	$("#speech").text(replies[randomNum]);

	// call play sound function
	playSounds(randomNum);

	randomEyes = randomNumGenerator(eyes);
	console.log("Random Eyes:" + randomEyes);
	//vanille js:document.getElementById("eyes").style.backgroundImage = "url('assets/img/'"+eyes[randomEyes]
	$('#eyes').css('background','url("assets/img/'+ eyes[randomEyes] + '.png") no-repeat');
	$('#eyes').css('background-size',"100% auto");
}

// init function
function init(){
	console.log("Hello World");

    //create element with vanille js
    audioElement = document.createElement('audio');// creates a <audio></audio>
    audioElement.setAttribute('autoplay','autoplay'); // generates <audio autoplay></audio>

    //var submit = document.getElementById('submit');
    //submit.addEventListener("click",function(){
    //answerQuestions();
    //})

    $('#submit').click(function(){
    	answerQuestions();
    });

}
// load init function on load
$(document).ready(function(){
	init();
});
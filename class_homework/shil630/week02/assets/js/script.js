//virables
var seconds = 0;
var messages = ["A lazy youth, a lousy age.","Do one thing at a time, and do well.","If winter comes , can spring be far behind ? ",
"Sharp tools make good work.","The first step is as good as half over.","Where there is a will, there is a way.",
"If the short cut to learning, it also must be diligent.","Victory belongs to the most persevering.",
"Time is a bird for ever on the wing.","Nothing is impossible.","Winners do what losers don't want to do.",
"The best preparation for tomorrow is doing your best today.","A girl because she had no shoes to cry, until she saw a man who had no feet.",
"Pursue your object, be it what it will, steadily and indefatigably.",
"A positive attitude may not think time and effort spent on the little things."];
var radomNum = 0;

$(document).ready(function(){   

	//create backHome function
	function backHome() {
		location.reload(); //reload 
	}

    //create ramdomNumGenerator function
	function randomNumGenerator(arrayName) {
	    return Math.floor(Math.random() * arrayName.length); 
    }

    //create showMessage function
	function showMessage() {
		radomNum = randomNumGenerator(messages);
		$("#bottle").hide();
		$("#message").show("fold",1300,"swing");
		$("#text").text(messages[radomNum]);
		$("#buttonBack").click(function(){
			backHome();
		});
	}

    //create bottle function
    function bottle() {
    	$("#bottle").show("fade",1000,"swing");
    	$("#buttonOpen").click(function(){
    		showMessage();
    	});
    }

    //create loading function
    function loading() {

    	$("#loading").show();
    	setInterval(function(){
    		seconds += 1;
    		console.log(seconds);
    		if (seconds == 2) {
        		$("#loading").hide("fade");
        		bottle();
        	}
    	},1000);
    
    
    }

    //click pick up, hide wrapper, shou loading animation
    $("#buttonPick").click(function(){
    	$("#wrapper").hide();
    	loading();
    	
    });


});
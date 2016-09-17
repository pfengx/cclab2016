var clock = $('.clock').FlipClock(new Date(2018,5,20).getTime()/1000 - new Date().getTime()/1000, {
	clockFace: 'DailyCounter',
	countdown: true
});



$(document).ready(function(){

	$( "#img" ).hover(function() {
		$( this ).css({width:"95%", height:"95%"});
	},function(){
		$(this).css({width:"100%",height:"100%"});  
	});

	$('img').click(function() {
		console.log("hi")
		$('img').replaceWith('<img id="gif" src="img/giphy.gif"/>');

		$('#gif').click(function() {
			console.log("hi111")
			$('#gif').replaceWith('<img id="img" src="img/gradHat.png"/>');
		});
	});

});







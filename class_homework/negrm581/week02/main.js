$(document).ready(function(){

	$('body').on('click', function(){
	var colors = ["red", "blue", "yellow", "gray", "white", "purple", "green", "orange"];
	var randColor = colors[Math.floor(Math.random()*colors.length)];
		$(this).css('background', randColor);
	});
});
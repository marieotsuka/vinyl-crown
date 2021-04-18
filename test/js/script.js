$(document).ready(function(){


	$(window).scroll(function() {
	  var theta = 0.01*$(window).scrollTop() % Math.PI;
	  $('#record').css({ transform: 'rotate(' + theta + 'rad)' });
	});


});


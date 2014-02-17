$(document).ready(function() {
	
	// make code pretty
	$('pre').addClass ('prettyprint linenums');
	
	window.prettyPrint && prettyPrint();
	
	

	// Set link targets
	$('a[data-target="new-window"]').attr('target', '_blank');
	$('a.go-back').click(function(e){
		e.preventDefault();
		history.go(-1);
	})


	// Smooth scroll
	$('body').plusAnchor({
      easing: 'easeInOutQuint',
      speed:  1000,
      offset: 90
  });

	$().UItoTop({ easingType: 'easeOutQuart' });
  
  
  $('.third-party-doc').attr ('target', '_blank').append ('<i class="icon-external-link"></i>');


	// Twitter feed

	


});
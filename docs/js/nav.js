$(function () {
	
	$('.section').each (function () {
		
		var section = $(this);
		
		var title = section.find ('.section-title h2').text ();
		title = section.attr ('data-nav-title');
		var subsection = section.find ('.sub-section').not ('.hide-sub-nav');
		
		if (subsection.length < 1) {
			var single = $('#single-template').clone ().removeAttr ('id');
			
			single.find ('a').text (title).attr ('href', '#' + section.attr ('id'));						
		
			$('.nav').append (single);
		
			//console.log (single);
		}
	
	if (subsection.length) {
		var dropdown = $('#dropdown-template').clone ().removeAttr ('id');
			
		dropdown.find ('a').html (title + ' <span class="caret"></span>');
		$('.nav').append (dropdown);
	}
	
		//console.log ('-- ' + title);
		
		
		subsection.each (function () {
			
			var single = $('#single-template').clone ().removeAttr ('id');
			var $this = $(this);
			var title = $this.find ('.content-left h3').text ();
			//console.log ('   - ' + title);
			
			single.find ('a').text (title).attr ('href', '#' + $this.attr ('id'))
			
			dropdown.find ('.dropdown-menu').append (single);
		});
		
	});
	
});
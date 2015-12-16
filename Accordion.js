$(document).ready(function() {
		function close_accordion_section1() {
			$('.side-bar-campus .Buildings_Name').removeClass('active');
			$('.side-bar-campus #Floors').slideUp(300).removeClass('open');
		}
		
		function close_accordion_section2() {
			$('#Floors .Floor').removeClass('active');
			$('#Floors #Rooms').slideUp(300).removeClass('open');
		}
	 
		$('.Buildings_Name').click(function(e) {
			// Grab current anchor value
			var currentAttrValue = $(this).attr('href');
	 
			if($(e.target).is('.active')) {
				close_accordion_section1();
			}else {
				close_accordion_section1();
	 
				// Add active class to section title
				$(this).addClass('active');
				// Open up the hidden content panel
				$('.side-bar-campus ' + currentAttrValue).slideDown(300).addClass('open'); 
			}e.preventDefault();
		});
	 
		$('.Floor').click(function(e) {
			// Grab current anchor value
			var currentAttrValue = $(this).attr('href');
	 
			if($(e.target).is('.active')) {
				close_accordion_section2();
			}else {
				close_accordion_section2();
	 
				// Add active class to section title
				$(this).addClass('active');
				// Open up the hidden content panel
				$('#Floors ' + currentAttrValue).slideDown(300).addClass('open'); 
				$('.side-bar-campus ' + currentAttrValue).slideDown(300).addClass('open'); 
			}
	 
			e.preventDefault();
		});
	});
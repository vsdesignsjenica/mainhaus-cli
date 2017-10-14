jQuery(function($) {

	$('div').mouseenter(function() { 
		$('#mycarousel').carousel({ interval: 2000, cycle: true });
	});

	$(function () {
		$("#slider").responsiveSlides({
		  auto: true,
		  speed: 500,
		  namespace: "callbacks",
		  pager: true,
		});
	  });


	  $(function () {
		// Slideshow 4
		$("#slider4").responsiveSlides({
		  auto: true,
		  pager:false,
		  nav: true,
		  speed: 500,
		  namespace: "callbacks",
		  before: function () {
			$('.events').append("<li>before event fired.</li>");
		  },
		  after: function () {
			$('.events').append("<li>after event fired.</li>");
		  }
		});

	  });

	// //#main-slider
	// $('div').mouseenter(function() { 
	// 	$('#main-slider').carousel({ interval: 5000, cycle: true });
	// }); 
	
	
	// //Initiat WOW JS
	// new WOW().init();
	
	// $(window).scroll(function(){
	// 	if ($(this).scrollTop() > 100) {
	// 		$('.scrollup').fadeIn();
	// 		} else {
	// 			$('.scrollup').fadeOut();
	// 		}
	// 	});
	
	// // portfolio filter
	// $('div').mouseenter(function(){'use strict';
	// 	var $portfolio_selectors = $('.portfolio-filter >li>a');
	// 	var $portfolio = $('.portfolio-items');
	// 	$portfolio.isotope({
	// 		itemSelector : '.portfolio-item',
	// 		layoutMode : 'fitRows'
	// 	});
		
	// 	$portfolio_selectors.on('click', function(){
	// 		$portfolio_selectors.removeClass('active');
	// 		$(this).addClass('active');
	// 		var selector = $(this).attr('data-filter');
	// 		$portfolio.isotope({ filter: selector });
	// 		return false;
	// 	});
	// });



    
});
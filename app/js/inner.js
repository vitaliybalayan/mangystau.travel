$(document).ready(function () {
	
	//initialize swiper when document ready
	$('.inner-page-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.slider-prev'),
		nextArrow: $('.slider-next'),
	});

	var previewBlock = $('[data-inner=1]');
	var contentBlock = $('[data-inner=2]');
	var placesBlock = $('[data-inner=3]');

	var mainMenu = $('.global-header');
	var mainBlock = $('.inner-page');
	
	var $footer = $('footer');
	var $footerHeight = $footer.outerHeight() + $('.terms-section').outerHeight();

	var tempScrollTop = 0;

	$(window).scroll(function() {

		var $this = $(this).scrollTop();

		// begin::Scroll Preview block to Content
		if ($this > previewBlock.outerHeight() - mainMenu.outerHeight()) {
			mainMenu.addClass('g-header--fixed');
			mainMenu.find('.g-header--desktop').removeClass('white-mode');
			mainMenu.find('.g-header--desktop').addClass('dark-mode');
		} else {
			mainMenu.removeClass('g-header--fixed');
			mainMenu.find('.g-header--desktop').removeClass('dark-mode');
			mainMenu.find('.g-header--desktop').addClass('white-mode');
		}
		// end::Scroll Preview block to Content

		if ($this > placesBlock.offset().top - mainMenu.outerHeight() / 2) {
			mainMenu.removeClass('g-header--fixed');
			mainMenu.addClass('g-header--no-fixed');

			mainMenu.css({
				'top': placesBlock.offset().top + 'px'
			});

			mainMenu.find('.g-header--desktop').removeClass('dark-mode');
			mainMenu.find('.g-header--desktop').addClass('sand-mode');
		} else {
			mainMenu.find('.g-header--desktop').removeClass('sand-mode');
			mainMenu.removeClass('g-header--no-fixed');
			mainMenu.css('top', '');
			// mainMenu.find('.g-header--desktop').addClass('dark-mode');
		}

		if ($this > $(document).outerHeight() - $footerHeight) {
			mainMenu.removeClass('g-header--fixed');
			mainMenu.addClass('g-header--no-fixed');

			mainMenu.css({
				'top': $footer.offset().top + 'px'
			});

			mainMenu.find('.g-header--desktop').removeClass('dark-mode sand-mode');
			mainMenu.find('.g-header--desktop').addClass('white-mode');
		} else {
			mainMenu.removeClass('g-header--no-fixed');
			mainMenu.css('top', '');
		}


		tempScrollTop = $this;
	});

	var $section = $('[class*=f-section]');

	// $section.bind('swipeDown', function() {
	// 	console.log('kek');
	// });

	// $section.mousewheel(function(event, delta) {

	// 	var $this = $(this).scrollTop();

	// 	if (delta < 0) {
	// 		event.preventDefault();

	// 		$('html, body').animate({
	// 			scrollTop: $this + $(this).outerHeight()
	// 		}, 250);
	// 	} else {
	// 		event.preventDefault();

	// 		$('html, body').animate({
	// 			scrollTop: $this - $(this).outerHeight()
	// 		}, 250);
	// 	}
		
	// });

});

$(document).on('click', '.inner-page--menu--sticky [data-aside_show="fullpage"]', function(block) {

	var aside_id = block.currentTarget.dataset.aside_id;

	AsideShowFullPage(aside_id);

	return false;
});


function AsideShowFullPage(id) {
	
	var asideButton = $('.aside-content-button[data-aside_block='+ id +']');
	var block = $('.inner-aside-block[data-aside_block='+ id +']');

	var blockWidth = block.outerWidth();
	var blockHeight = block.outerHeight();

	var asideImageContainerWidth = $('.inner-aside-image--container').outerWidth();

	var asideBlockTop = block.offset().top - $(window).scrollTop();
	var asideBlockLeft = block.offset().left;

	var gHeaderHeight = $('.global-header').outerHeight() + 30;

	var innerContainer = $('.inner-page--container');

	$('.aside-content').html('<div class="aside-block--container" data-aside_block='+ id +'></div>');
	var asideBlock = $('.aside-block--container[data-aside_block='+ id +']');

	var asideButtonOldText = asideButton.html();
	var asideButtonNewText = asideButton.data('next_text');

	asideButton.removeClass('hidden');
	asideButton.addClass('visible');
	
	asideButton.attr('data-next_text', asideButtonOldText);

	asideBlock.css({
		'top': ''+ asideBlockTop +'px',
		'left': ''+ asideBlockLeft +'px',
		'width': ''+ blockWidth +'px',
		'height': ''+ blockHeight +'px',
	});

	$('.aside-content').css('z-index', '2');

	innerContainer.animate({
		opacity: '0',
		userSelect: 'none'
	}, 300);

	setTimeout(function() {
		// console.log('start animate');
		asideButton.html(asideButtonNewText);

		$('.inner-aside-image--container[data-aside_id='+ id +'] > .inner-aside-image').each(function() {
			$(this).css({
				// 'width': ''+ asideImageContainerWidth +'px',
				'position': 'relative',
				'width': '100%',
			});
		});

		block.addClass('showing');

		asideBlock.css({
			'top': ''+ gHeaderHeight +'px',
			'left': '0px',
			'width': '100%'
		});

	}, 200)

	block.appendTo(asideBlock);
}

// function AsideShowFullPage(id) {
// 	// console.log('Время магии');

// 	var scrollHeight = $('.inner-page--main_block--background').height() / 2;

// 	var asideButton = $('.aside-content-button[data-aside_block='+ id +']');

	// var asideButtonOldText = asideButton.html();
	// var asideButtonNewText = asideButton.data('next_text');

	// asideButton.removeClass('hidden');
	// asideButton.addClass('visible');
	
	// asideButton.attr('data-next_text', asideButtonOldText);

// 	$('html, body').animate({
// 		scrollTop: scrollHeight
// 	}, 500, function(event) {
// 		asideButton.html(asideButtonNewText);
		
// 		$('.inner-page--menu--sticky').addClass('no--sticky');
		
// 		var inner_background = $('.inner-page--main_block--background');
// 		var inner_content = $('.inner-page--content');
// 		var inner_container = $('.inner-page--container');

// 		var block = $('.inner-aside-block[data-aside_block='+ id +']');

		// $('.inner-aside-image--container[data-aside_id='+ id +'] > .inner-aside-image').each(function() {
		// 	$(this).addClass('image-popup--button');
		// });

// 		var dustanceContainer = inner_container.outerWidth() - inner_content.outerWidth() - block.outerWidth();

// 		var contentTop = block.offset().top - inner_background.offset().top - inner_background.outerHeight() - 50;
// 		var contentLeft = inner_content.outerWidth() + dustanceContainer;
		

// 		block.css({
// 			'transform': 'translate(-'+ contentLeft +'px, -'+ contentTop +'px)',
// 			'-webkit-transform': 'translate(-'+ contentLeft +'px, -'+ contentTop +'px)',
// 			'-ms-transform': 'translate(-'+ contentLeft +'px, -'+ contentTop +'px)',
// 		});
		

// 		setTimeout(function() {
// 			block.css({
// 				'position': 'absolute',
// 				'min-width': ''+ inner_container.outerWidth() +'px',
// 			});
			

// 			// inner_container.fadeOut();
			// inner_container.animate({
			// 	opacity: '0',
			// 	userSelect: 'none'
			// }, 100);

// 		}, 600);




// 		setTimeout(function() {
// 			block.css({
// 				'transform': 'unset',
// 				'-webkit-transform': 'unset',
// 				'-ms-transform': 'unset',
// 			});

// 			block.addClass('showing');

// 			block.appendTo('.aside-content');
// 		}, 700);
// 	});

// }

// function AsideHideFullPage(id) {
// 	var asideButton = $('.aside-content-button[data-aside_block='+ id +']');
// 	// console.log(asideButton[0]);

// 	var asideButtonOldText = asideButton.html();
// 	var asideButtonNewText = asideButton[0].dataset.next_text;

// 	var inner_content = $('.inner-page--content');
// 	var inner_container = $('.inner-page--container');
// 	var menu_sticky = $('.inner-page--menu--sticky');

// 	console.log(asideButtonNewText);

// 	asideButton.removeClass('visible');
// 	asideButton.addClass('hidden');
	
// 	asideButton.attr('data-next_text', asideButtonOldText);

// 	var block = $('.inner-aside-block[data-aside_block='+ id +']');
// 	block.removeClass('showing');

// 	block.css({
// 		'min-width': ''+ menu_sticky.outerWidth() +'px',
// 	});

// 	setTimeout(function() {
// 		inner_container.animate({
// 			opacity: '1',
// 			userSelect: 'unset'
// 		}, 100);
// 	}, 100);

// 	var positionLeft = $('.inner-aside-grid').offset().left - $('.layout-space-left').outerWidth();
// 	var positionTop = $('.inner-aside-grid').first().outerHeight();

// 	$('.inner-aside-image--container[data-aside_id='+ id +'] > .inner-aside-image').each(function() {
// 		$(this).removeClass('image-popup--button');
// 	});

// 	// console.log($('.inner-aside-grid').offset());

// 	setTimeout(function() {
// 		block.css({
// 			'transform': 'translate('+ positionLeft +'px, '+ positionTop +'px)',
// 			'-moz-transform': 'translate('+ positionLeft +'px, '+ positionTop +'px)',
// 			'-ms-transform': 'translate('+ positionLeft +'px, '+ positionTop +'px)',
// 		});


// 	}, 300);

// 	setTimeout(function() {
	
// 		menu_sticky.removeClass('no--sticky');
// 		block.appendTo('.inner-aside-grid[data-aside_block='+ id +']');

// 		block.css({
// 			'transform': '',
// 			'min-width': '',
// 			'position': '',
// 		});
		
// 	}, 600);

// 	asideButton.html(asideButtonNewText);
// }

$(document).on('click', '.aside-content-button', function(element) {

	element.preventDefault();

	if ($(this).hasClass('hidden')) {
		AsideShowFullPage($(this).data('aside_block'));
		
		return false;
	}

	if ($(this).hasClass('visible')) {
		AsideHideFullPage($(this).data('aside_block'));
		
		return false;
	}

});
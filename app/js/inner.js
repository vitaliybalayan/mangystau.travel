$(document).on('click', '[data-aside_show="fullpage"]', function(block) {

	var scrollHeight = $('.inner-page--main_block--background').height() / 2;

	$('html, body').animate({
		scrollTop: scrollHeight
	}, 500, function(event) {
		$('.inner-page--menu--sticky').addClass('no--sticky');
		
		var aside_id = block.currentTarget.dataset.aside_id;
		AsideShowFullPage(aside_id);
		
	});

	return false;
});

function AsideShowFullPage(id) {
	// console.log('Время магии');

	var inner_background = $('.inner-page--main_block--background');
	var inner_content = $('.inner-page--content');
	var inner_container = $('.inner-page--container');

	var block = $('.inner-aside-block[data-aside_block='+ id +']');

	var dustanceContainer = inner_container.outerWidth() - inner_content.outerWidth() - block.outerWidth();

	var contentTop = block.offset().top - inner_background.offset().top - inner_background.outerHeight() - 50;
	var contentLeft = inner_content.outerWidth() + dustanceContainer;
	

	block.css({
		'transform': 'translate(-'+ contentLeft +'px, -'+ contentTop +'px)',
		'-webkit-transform': 'translate(-'+ contentLeft +'px, -'+ contentTop +'px)',
		'-ms-transform': 'translate(-'+ contentLeft +'px, -'+ contentTop +'px)',
	});

	setTimeout(function() {
		block.css({
			'position': 'absolute',
			'min-width': ''+ inner_container.outerWidth() +'px',
			// 'left': '0',
		});

		inner_container.fadeOut();
	}, 600);


	setTimeout(function() {
		block.css({
			'transform': 'unset',
			'-webkit-transform': 'unset',
			'-ms-transform': 'unset',
		});

		block.appendTo('.aside-content');
	}, 700);



}
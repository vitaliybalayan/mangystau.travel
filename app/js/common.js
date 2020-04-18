$(function() {

	// begin::Init AOS Plugin
	AOS.init();
	// end::Init AOS Plugin
	
	$('.inner-page--main_block--background').hover(function() {
		$('.i-p--m_b--f-link').addClass('hovered');
	}, function() {
		$('.i-p--m_b--f-link').removeClass('hovered');
	});

});

$(document).on('click', '.image-popup--button', function(element) {
	element.preventDefault();
	var src = $(this).data('img');
	showImagePopup(src);
});

$(document).on('click', '.popup-overlay', function() {
	hidePopups();
});

function showImagePopup(imgSrc) {
	console.log(imgSrc);

	var img = '<img src='+ imgSrc +'>';
	var block = $('.popup-img');

	block.fadeIn();
	block.html(img);

	$('.popup-overlay').fadeIn();
}

function hidePopups() {
	$('.popup-overlay').fadeOut(250);

	$('.popup').fadeOut(250);
}
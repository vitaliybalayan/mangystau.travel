$(function() {

	// begin::Init AOS Plugin
	AOS.init({
		once: true
	});
	// end::Init AOS Plugin
	
	$('.inner-page--main_block--background').hover(function() {
		$('.i-p--m_b--f-link').addClass('hovered');
	}, function() {
		$('.i-p--m_b--f-link').removeClass('hovered');
	});

	// begin::Guides and places slider
	$('.guide-f-section-slider, .places-preview--cards-slider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	// end::Guides slider

});

$(document).ready(function() {
	// 
});

$(document).on('click', '.g-selected-lang', function(e) {
	e.preventDefault();

	var $menuLang = $('.g-parent-lang');

	if ($menuLang.hasClass('active')) {
		$menuLang.slideUp();
		$menuLang.removeClass('active');
	} else {
		$menuLang.slideDown();
		$menuLang.addClass('active');
	}

	return false;
});

$(document).mouseup(function (e) {
	var $menuLang = $('.g-parent-lang');

    var container = $('.g-select-lang');
    if (container.has(e.target).length === 0){
        $menuLang.slideUp();
		$menuLang.removeClass('active');
    }
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
$(document).mousemove(function(event){

	var x = (event.clientX/$(window).width())-0.5;
	var y = (event.clientY/$(window).height())-0.5;

	TweenLite.to($('.perspective-image, .slide-text-animate'), 0.6, {
		rotationY: 5*x,
		rotationX: 5*y,
		ease: Power1.easeOut,
		transformPerspective: 400,
		transformOrigin: "center"
	});

	// console.log(x);
	// $('.main-slider--item--title_text').css('background-position',event.pageX+'px '+event.pageY+'px');
});

$('.main-slider--item--title_text').ready(function() {
	console.log('Картинка загружена');
});

$(document).ready(function() {
	console.log('Страница загружена');
});

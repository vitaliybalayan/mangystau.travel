// $('.main-slider--item').mousemove(function(event){

// 	var x = (event.clientX/$(window).width())-0.5;
// 	var y = (event.clientY/$(window).height())-0.5;

// 	TweenLite.to($('.perspective-image'), 0.6, {
// 		rotationY: 5*x,
// 		rotationX: 5*y,
// 		ease: Power1.easeOut,
// 		transformPerspective: 400,
// 		transformOrigin: "center"
// 	});

// 	// console.log(x);
// 	$('.main-slider--item--title_text').css('background-position',event.pageX/7+'px '+event.pageY/7+'px');
// });
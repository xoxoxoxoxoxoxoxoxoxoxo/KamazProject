
"use strict";


/*Кнопка наверх-плавно                   */


$(function () {

	let btn = $('.scroll_top');

	$(window).scroll(function () {

		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		}
		else {
			btn.removeClass('show');
		}
	});

	$('.scroll_top').click(function (e) {
		e.preventDefault();
		$('html, window').animate({scrollTop: 0 },2000);
		return false;
	});
});




/*меню бургер                         */

$('.burger').click(function (e) {
   e.preventDefault();
   $('.navigation_menu').toggleClass('show');



})

// if( $(window).width() < 991 ){
// 	$('.navigation_menu li a ').click(function (e) {
// 		e.preventDefault();
// 		$('.navigation_menu').toggleClass('show');
// 	})
// }



/*плавный переход                         */

$("a.scrollto").click(function () {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
	return false;
	});


/*Popup-окно                                */

$('.details').click(function(e) {
	e.preventDefault(e);
	let destinationPopup = $(this).attr("href");
	$(destinationPopup).addClass('show');

	$('.popup_close').click(function(){
		$(destinationPopup).removeClass('show');
	});

	$('.popup_overlay').click(function(){
		$(destinationPopup).removeClass('show');
	});


});
	

/*Пример слайдера                                */

$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
	responsive:{
		 0:{
			  items:3
		 },
		 600:{
			  items:5
		 },
		 1000:{
			  items:7
		 }
	}
})


/*  отправка обратной связи                                               */




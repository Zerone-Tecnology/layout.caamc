$(function() {

	var countDownDate = new Date("Sep 23, 2025 09:00:00").getTime();
	// Update the count down every 1 second
	var x = setInterval(function() {

		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

		// Display the result in the element with id="demo"
		document.getElementById("timerBlock").innerHTML = '<div class="block"><div class="num">' + days +'</div><p>Дней</p></div>'
		+ '<div class="block"><div class="num">' + hours +'</div><p>Часов</p></div>'
		+ '<div class="block"><div class="num">' + minutes +'</div><p>Минут</p></div>';

		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("timerBlock").innerHTML = "EXPIRED";
		}
	}, 1000);

	$('.gallery-items-first').addClass("owl-carousel");
	$('.gallery-items-second').addClass("owl-carousel");

	$('.gallery-items-first').owlCarousel({
		items: 5,
		autoplayTimeout: 3000,
		loop: true,
		stagePadding: 100,
		smartSpeed: 2000,
		autoplay: true,
		rtl: true,
		dots: false,
		responsive: {
			0:{
				items: 1
			},
			480:{
				items: 2
			},
			992:{
				items: 3
			},
			1280:{
				items: 4
			}
		}
	});

	$('.gallery-items-second').owlCarousel({
		items: 5,
		autoplayTimeout: 3000,
		loop: true,
		stagePadding: 100,
		smartSpeed: 2000,
		responsive: {
			0:{
				items: 1
			},
			480:{
				items: 2
			},
			992:{
				items: 3
			},
			1280:{
				items: 4
			}
		},
		autoplay: true,
		rtl: false,
		dots: false
	});


	// if (ScrollTrigger.isTouch !== 1) {
	// 	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
		
	// 	ScrollSmoother.create({
	// 		wrapper: '.main',
	// 		content: '.container',
	// 		smooth: 1.5,
	// 		effects: true
	// 	});
		
	// 	gsap.fromTo('.main-content', {opacity: 1},{
	// 		opacity: 0,
	// 		scrollTrigger: {
	// 			trigger: '.main-content',
	// 			start: 'center',
	// 			end: '100',
	// 			scrub: true
	// 		}
	// 	});

	// 	gsap.fromTo('.cover-block-wrap', {opacity: 1},{
	// 		opacity: 0,
	// 		scrollTrigger: {
	// 			trigger: '.cover-block-wrap',
	// 			start: 'center',
	// 			end: '100',
	// 			scrub: true
	// 		}
	// 	});
	// }

});

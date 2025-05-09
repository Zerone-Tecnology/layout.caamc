$(function() {

	if (screen.width <= 768) {
		document.addEventListener(
			"click",
			function(e) {
				if (!e.target.closest(".mobile-container") && !e.target.closest(".btn-open")) {
					$('.mobile-container').css('display', 'none');
				}
			},
			false
		)
	};

	$('#mmWrap').on('click', function(){
		$('.mobile-container').css('display', 'none');
		console.info('click');
	});

	new WOW().init();

	$('.btn-open').on('click', function(){
		$('.mobile-container').css('display', 'block');
	})
	$('.btn-close').on('click', function(){
		$('.mobile-container').css('display', 'none');
	})

	$('.tab-nav .tab-link').on('click', function(){
		$('.tab-nav .tab-link').removeClass('active');
		$('.tab-content .content.parent').removeClass('active');
		var tab = $(this).attr('data-tab');

		$(this).addClass('active');
		$(tab).addClass('active');
	});

	$('.tab-nav.sub div').on('click', function(){
		$('.tab-nav.sub div').removeClass('active');
		$('.tab-content.sub .content').removeClass('active');
		var tab = $(this).attr('data-tab');

		$(this).addClass('active');
		$(tab).addClass('active');
	});

	$(".menu-wrap ul").clone().appendTo("#mmWrap");

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
				items: 1,
				stagePadding: 0
			},
			480:{
				items: 1,
				stagePadding: 0
			},
			766:{
				items: 2,
				stagePadding: 50
			},
			992:{
				items: 2
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
				items: 1,
				stagePadding: 0
			},
			480:{
				items: 1,
				stagePadding: 0
			},
			766:{
				items: 2,
				stagePadding: 50
			},
			992:{
				items: 2,
				stagePadding: 50
			},
			1280:{
				items: 4,
				stagePadding: 100
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

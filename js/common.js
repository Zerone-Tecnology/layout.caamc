$(function() {

	if (ScrollTrigger.isTouch !== 1) {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
	
	ScrollSmoother.create({
		wrapper: '.main',
		content: '.container',
		smooth: 1.5,
		effects: true
	});
	
	gsap.fromTo('.main-content', {opacity: 1},{
		opacity: 0,
		scrollTrigger: {
			trigger: '.main-content',
			start: 'center',
			end: '100',
			scrub: true
		}
	});

	gsap.fromTo('.cover-block-wrap', {opacity: 1},{
		opacity: 0,
		scrollTrigger: {
			trigger: '.cover-block-wrap',
			start: 'center',
			end: '100',
			scrub: true
		}
	});
}

});

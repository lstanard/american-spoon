/*------------------------------------------------------------------
    INITIALIZERS: UI components
-------------------------------------------------------------------*/

uiFunctions.init();

var functionCheck = jRespond([
		{
			label: 'med',
			enter: 649,
			exit: 1279
		},
		{
			label: 'handheld',
			enter: 0,
			exit: 648
		}
	]);

	functionCheck.addFunc({
		breakpoint: '*',
		enter: function() {
			uiFunctions.site.setFooterYear();
			uiFunctions.site.bindLoginPageControls();
			uiFunctions.site.setupScrollToLinks();

			var mantleSlider = $('.bxslider').bxSlider({
				adaptiveHeight: true,
				slideWidth: 1200,
				onSliderLoad: function(currentSlide, currentIndex) {
					$(currentSlide).addClass('active');
				},
				onSlideNext: function($slideElement, oldIndex, newIndex) {
					$slideElement.addClass('active').siblings().removeClass('active');
				},
				onSlidePrev: function($slideElement, oldIndex, newIndex) {
					$slideElement.addClass('active').siblings().removeClass('active');
				}
			});
		}
	});
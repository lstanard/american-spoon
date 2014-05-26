/*------------------------------------------------------------------
    INITIALIZERS: UI components
-------------------------------------------------------------------*/

document.addEventListener("touchstart", function(){}, true);

var functionCheck = jRespond([
		{
			label: 'med-lrg',
			enter: 648,
			exit: 10000
		}
	]);

	functionCheck.addFunc({
		breakpoint: '*',
		enter: function() {
			uiFunctions.site.setupHeader();
			uiFunctions.site.setFooterYear();
			uiFunctions.site.bindLoginPageControls();
			uiFunctions.site.setHeaderWaypoint();
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

	functionCheck.addFunc({
		breakpoint: 'med-lrg',
		enter: function() {

			if ( $('body').hasClass('index') ) {
				uiFunctions.site.setColumnHeight(['.featured-products__grid li', '.featured-recipes__grid ul li']);
			}
			if ( $('body').hasClass('product-single') ) {
				uiFunctions.site.setColumnHeight(['.related-products__grid ul li']);
			}
			if ( $('body').hasClass('page__recipes__category') ) {
				uiFunctions.site.setColumnHeight(['.recipes__category__list li']);
			}
			if ( $('body').hasClass('page__shop') ||  $('body').hasClass('page__shop-option02') ) {
				uiFunctions.site.setColumnHeight(['.shop-products__grid li']);
			}

			uiFunctions.site.setColumnHeight(['.footer__primary > .row > div']);

		},

		exit: function() {

			if ( $('body').hasClass('index') ) {
				uiFunctions.site.unsetColumnHeight(['.featured-products__grid li', '.featured-recipes__grid ul li']);
			}
			if ( $('body').hasClass('product-single') ) {
				uiFunctions.site.unsetColumnHeight(['.related-products__grid ul li']);
			}
			if ( $('body').hasClass('page__shop') ) {
				uiFunctions.site.unsetColumnHeight(['.shop-products__grid li']);
			}

		}
	});
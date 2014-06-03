/*------------------------------------------------------------------
    INITIALIZERS: UI components
-------------------------------------------------------------------*/

uiFunctions.init();

var functionCheck = jRespond([
		{
			label: 'med-lrg',
			enter: 648,
			exit: 10000
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
			uiFunctions.site.setHeaderWaypoint();
			uiFunctions.site.setupScrollToLinks();

			$('#cart-table').stacktable();

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

			console.log('enter med lrg');

			if ( $('body').hasClass('index') ) {
				uiFunctions.site.setColumnHeight(['.featured-recipes__grid ul li']);
				uiFunctions.site.setColumnHeight(['.featured-products__grid li']);
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

		},

		exit: function() {

			console.log('exit med lrg');

			if ( $('body').hasClass('index') ) {
				uiFunctions.site.unsetColumnHeight(['.featured-recipes__grid ul li']);
				uiFunctions.site.unsetColumnHeight(['.featured-products__grid li']);
			}
			if ( $('body').hasClass('product-single') ) {
				uiFunctions.site.unsetColumnHeight(['.related-products__grid ul li']);
			}
			if ( $('body').hasClass('page__shop') ) {
				uiFunctions.site.unsetColumnHeight(['.shop-products__grid li']);
			}

		}
	});
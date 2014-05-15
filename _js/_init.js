/*------------------------------------------------------------------
    INITIALIZERS: UI components
-------------------------------------------------------------------*/

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
			uiFunctions.site.setFooterYear();
			uiFunctions.site.bindLoginPageControls();
		}
	});

	functionCheck.addFunc({
		breakpoint: 'med-lrg',
		enter: function() {
			uiFunctions.site.setHeaderWaypoint();
			uiFunctions.site.cloneDesktopHeader();

			if ( $('body').hasClass('index') ) {
				uiFunctions.site.setColumnHeight(['.featured-products__grid li', '.featured-recipes__grid ul li']);
			}
			if ( $('body').hasClass('product-single') ) {
				uiFunctions.site.setColumnHeight(['.related-products__grid ul li']);
			}
			if ( $('body').hasClass('page__recipes__category') ) {
				uiFunctions.site.setColumnHeight(['.recipes__category__list li']);
			}

		},

		exit: function() {

			if ( $('body').hasClass('index') ) {
				uiFunctions.site.unsetColumnHeight(['.featured-products__grid li', '.featured-recipes__grid ul li']);
			}
			if ( $('body').hasClass('product-single') ) {
				uiFunctions.site.unsetColumnHeight(['.related-products__grid ul li']);
			}

		}
	});
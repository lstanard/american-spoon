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
		}
	});

	functionCheck.addFunc({
		breakpoint: 'med-lrg',
		enter: function() {
			uiFunctions.site.setHeaderWaypoint();
			uiFunctions.site.setColumnHeight(['.featured-products__grid li', '.featured-recipes__grid ul li']);
		},
		exit: function() {
			uiFunctions.site.unsetColumnHeight(['.featured-products__grid li', '.featured-recipes__grid ul li']);
		}
	});
/*------------------------------------------------------------------
    INITIALIZERS: UI components
-------------------------------------------------------------------*/

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
		}
	});
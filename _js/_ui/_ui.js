/*------------------------------------------------------------------
    USER INTERFACE COMPONENTS
-------------------------------------------------------------------*/

(function() {

	var $w = $(window),
		sw = document.documentElement.clientWidth,
		sh = document.documentElement.clientHeight;

		$w.smartresize(function(){
			sw = document.documentElement.clientWidth;
			sh = document.documentElement.clientHeight;
			console.log(sw, sh);
		});

		return uiFunctions = {

			site: {

				setFooterYear: function() {
					var year = new Date().getFullYear();
					$('#footer__year').text(year);
				},

				unsetColumnHeight: function(selectorArray) {

					var selectors = new Array();

					$.each(selectorArray, function(index, value){
						selectors.push($(value));
					});

					$.each(selectors, function() {
						$(this).css('height', '');
					});

				},

				setColumnHeight: function(selectorArray) {

					var selectors = new Array(),
						currentTallest = 0,
						currentRowStart = 0,
						rowDivs = new Array(),
						$el,
						topPosition = 0;

					$.each(selectorArray, function(index, value){
						selectors.push($(value));
					});

					function setHeights() {

						$.each(selectors, function() {

							$el = $(this);
							topPostion = $el.position().top;

							if (currentRowStart != topPostion) {

								for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
									rowDivs[currentDiv].height(currentTallest);
								}

								rowDivs.length = 0;
								currentRowStart = topPostion;
								currentTallest = $el.height();
								rowDivs.push($el);

							} else {
								rowDivs.push($el);
								currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
							}

							for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
								rowDivs[currentDiv].height(currentTallest);
							}

						});
					}

					setHeights();

				},

				setHeaderWaypoint: function() {
					$('.main-container').waypoint(function(direction){

						if ( direction === 'down' ) {
							$('.header-container').addClass('header--condensed');
							$('.shipping-banner').addClass('hidden');
						}
						else if ( direction === 'up' ){
							$('.header-container').removeClass('header--condensed');
							$('.shipping-banner').removeClass('hidden');
						}

					}, { offset: -300 } );
				}

			}
		}

})();
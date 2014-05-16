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

					$(document).ready(function() {

						var selectors = new Array();

						$.each(selectorArray, function(index, value){
							selectors.push($(value));
						});

						$.each(selectors, function() {
							$(this).css('height', '');
						});

					});

				},

				setColumnHeight: function(selectorArray) {

					$(document).ready(function() {

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

					});

				},

				setHeaderWaypoint: function() {

					$('body').waypoint(function(direction){

						if ( direction === 'down' ) {
							$('body').addClass('header-collapse');
						}
						else if ( direction === 'up' ){
							$('body').removeClass('header-collapse');
						}

					}, { offset: -215 } );

				},

				bindScrollToTop: function() {

					$(document).ready(function() {
						$('.primary-nav__scroll-top').on('click', function(e){
							$('html, body').animate({
								scrollTop: 0
							}, 1250);
							e.preventDefault();
						});
					});

				},

				setCatalogRequestControls: function() {

					$(document).ready(function() {

					});

				},

				cloneDesktopHeader: function() {

					$(document).ready(function() {
						$('.header-container').clone().insertAfter('.header-container').addClass('header--clone');
						uiFunctions.site.bindScrollToTop();
					});

				},

				bindLoginPageControls: function() {

					$('#login__current-user__btn, #login__create-acct__btn').on('click', function(e) {
						$(this).hide().next('form').fadeIn();
						e.preventDefault();
					});

				}

			}
		}

})();
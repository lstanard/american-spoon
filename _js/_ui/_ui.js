/*------------------------------------------------------------------
	USER INTERFACE COMPONENTS
-------------------------------------------------------------------*/

(function() {

	var $w = $(window),
		sw = document.documentElement.clientWidth,
		sh = document.documentElement.clientHeight,
		navBreak = 1024;

		$w.smartresize(function(){
			sw = document.documentElement.clientWidth;
			sh = document.documentElement.clientHeight;
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

				setupScrollToLinks: function() {
					$('.scrollto').on('click', function(e) {
						var targetElement = $('#' + $(this).attr('href').substring(1));
						if (targetElement.length >= 1) {
							var target = targetElement.offset().top,
								scrollSpeed = function() { return Math.ceil( Math.abs( target - $w.scrollTop() ) / 1.5 ); };
							$('html, body').animate({
								scrollTop: target
							}, scrollSpeed() );
						}
						e.preventDefault();
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

				setupMobileMenu: function() {

					var menuStatus = 'closed',
						$nav = $('.mobile-menu #nav'),
						$subMenus = $nav.find('.submenu'),
						navWidth = $nav.innerWidth(),
						navHeight = $nav.innerHeight();

					// Menu toggle

					$('.mobile-menu #nav-toggle').on('click', function(e) {
						if ( menuStatus == 'closed' ) {
							$(this).parents('.mobile-menu').addClass('mobile-menu--open');
							menuStatus = 'open';
							navHeight = $nav.innerHeight();
							$subMenus.each(function() {
								$(this).css({
									'height': navHeight
								});
							});
						}
						else if ( menuStatus == 'open' ) {
							$(this).parents('.mobile-menu').removeClass('mobile-menu--open');
							menuStatus = 'closed';
						}
						e.preventDefault();
					});

					// Append all links to the same list

					$('.mobile-menu .primary-nav__explore li').each(function() {
						$(this).appendTo('.mobile-menu .primary-nav__shop');
					});
					$('.mobile-menu .primary-nav__utility li').each(function() {
						var navItem = $(this),
							navText = $(this).find('.mls').text(),
							navLink = $(this).find('a').attr('href');

						$('.mobile-menu .primary-nav__shop').append('<li><a href="' + navLink + '">' + navText + '</a></li>');

						// $(this).appendTo('.mobile-menu .primary-nav__shop');
					});

					// Submenus

					$('.mobile-menu .parentmenu li a').on('click', function(e) {
						if ( $(this).next('ul.submenu').length > 0 ) {
							$(this).next('.submenu').addClass('submenu--open');
							e.preventDefault();
						}
					});

					$('.mobile-menu .submenu').each(function() {

						var width = $(this).innerWidth(),
							subMenu = $(this);

						subMenu.prepend('<li class="submenu__back"><a href="#"><span>&lt;</span> Back</a></li>');
						subMenu.css({
							'right': -width
						});

						$(this).find('.submenu__back').on('click', function(e) {
							subMenu.removeClass('submenu--open');
							e.preventDefault();
						});

					});

				},

				setupHeader: function() {

					$(document).ready(function() {

						if ( $('body').find('.header--clone').length == 0 ) {

							// Create a clone of the header (for desktop fixed + mobile menu)
							$('.header-container').clone().insertAfter('.header-container').addClass('header--clone');

							// Bind "scroll to top" event listener
							uiFunctions.site.bindScrollToTop();

						}

						// Setup header + nav for small screens
						if ( sw < navBreak ) {
							$('.header-container').not( $('.header--clone') ).hide();
							$('.header--clone').addClass('mobile-menu');
							uiFunctions.site.setupMobileMenu();
						}
						else if ( sw >= navBreak ) {
							$('.header-container').not( $('.header--clone') ).show();
							$('.header--clone').removeClass('mobile-menu');
						}

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
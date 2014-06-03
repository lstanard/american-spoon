/*------------------------------------------------------------------
	USER INTERFACE COMPONENTS
-------------------------------------------------------------------*/

(function() {

	var $w = $(window),
		sw = document.documentElement.clientWidth,
		sh = document.documentElement.clientHeight,
		navBreak = 1024,
		setupHeaderCount = 0;

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

				setupSearchMenu: function() {

					$(document).ready(function() {

						$('.header__search-btn').on('click tap', function(e) {
							$(this).toggleClass('search-open');
							e.preventDefault();
						});

						// Search form for full header view
						$('.header-container:not(.header--clone) .header__search-btn').on('click tap', function(e) {
							$('.header-container:not(.header--clone) .header__search').toggleClass('expanded');
						});

						// Search form for condensed (fixed) header view
						$('.header-container.header--clone .header__search-btn').on('click tap', function(e) {
							$('.header-container.header--clone .header__search').toggleClass('expanded');
						});

						$('.mobile-menu .mobile__search-btn').on('click tap', function(e) {
							$(this).toggleClass('active');
							$('.mobile-menu .header__search').toggleClass('expanded');
							// $('.mobile-menu .header__search__input').focus();
							e.preventDefault();
						});

					});

				},

				setupScrollToLinks: function() {

					$('.scrollto').on('click tap', function(e) {
						var targetElement = $('#' + $(this).attr('href').substring(1));
						if (targetElement.length >= 1) {
							var target = targetElement.offset().top - 55,
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

					// Run once

					function runOnce() {

						if (setupHeaderCount < 1) {

							// Append all links to the same list
							$('.mobile-menu .primary-nav__explore > li').each(function() {
								$(this).clone().addClass('mobile-menu__item').appendTo('.mobile-menu .primary-nav__shop');
							});
							$('.mobile-menu .primary-nav__utility li').each(function() {
								var navItem = $(this),
									navText = $(this).find('.mls').text(),
									navLink = $(this).find('a').attr('href');
								$('<li><a href="' + navLink + '">' + navText + '</a></li>').addClass('mobile-menu__item').appendTo('.mobile-menu .primary-nav__shop');
							});

							$('.mobile-menu .submenu').each(function() {

								var subMenu = $(this);

								subMenu.prepend('<li class="submenu__back"><a href="#"><span>&lt;</span> Back</a></li>');

								$(this).find('.submenu__back').on('click tap', function(e) {
									subMenu.removeClass('submenu--open');
									e.preventDefault();
								});

							});

						}

						setupHeaderCount++;

					}

					runOnce();

					// Menu toggle

					$('.mobile-menu #nav-toggle').on('click tap', function(e) {
						if ( menuStatus == 'closed' ) {
							$('.mobile-menu .mobile__search-btn').removeClass('active');
							$('.mobile-menu .header__search').removeClass('expanded');
							$(this).parents('.mobile-menu').addClass('mobile-menu--open');
							menuStatus = 'open';
							navHeight = $nav.innerHeight();
							$subMenus.each(function() {
								$(this).css({
									'min-height': navHeight
								});
							});
						}
						else if ( menuStatus == 'open' ) {
							$(this).parents('.mobile-menu').removeClass('mobile-menu--open');
							menuStatus = 'closed';
						}
						e.preventDefault();
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

						subMenu.css({
							'right': -width
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
						if ( sw <= navBreak ) {
							$('.header-container').not( $('.header--clone') ).hide();
							$('.header--clone').addClass('mobile-menu').show();
							uiFunctions.site.setupMobileMenu();
						}
						else if ( sw > navBreak ) {
							$('.header-container').not( $('.header--clone') ).show();
							$('.header--clone').removeClass('mobile-menu');
						}

					});

				},

				bindLoginPageControls: function() {

					$('#login__current-user__btn, #login__create-acct__btn').on('click tap', function(e) {
						$(this).hide().next('form').fadeIn();
						e.preventDefault();
					});

				}
			},

			init: function() {

				document.addEventListener("touchstart", function(){}, true);

				uiFunctions.site.setupHeader();
				uiFunctions.site.setupSearchMenu();

				$('.product-details').appendAround();
				$('.related-recipes').appendAround();

				$w.resize(function() {
					sw = document.documentElement.clientWidth;
					sh = document.documentElement.clientHeight;
					uiFunctions.site.setupHeader();
				});

			}

		}

})();
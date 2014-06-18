/*------------------------------------------------------------------
	USER INTERFACE COMPONENTS
-------------------------------------------------------------------*/

(function() {

	var $w = $(window),
		sw = document.documentElement.clientWidth,
		sh = document.documentElement.clientHeight,
		scrollbarWidth = 0,
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

				setupSearchMenu: function() {

					$(document).ready(function() {

						$('.header__search-btn, .primary-nav__search').on('click tap', function(e) {
							$(this).toggleClass('search-open');
							$('.header__search').toggleClass('expanded');
							e.preventDefault();
						});

						$('.search-close').on('click tap', function(e) {
							$('.header__search-btn').toggleClass('search-open');
							$('.header__search').toggleClass('expanded');
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

					if (sw > navBreak) {

						$('body').waypoint(function(direction){
							if ( direction === 'down' ) {
								$('#header').addClass('header-collapsed');
							}
							else if ( direction === 'up' ){
								$('#header').removeClass('header-collapsed');
							}
						}, { offset: -170 } );

						$('body').waypoint(function(direction){
							if ( direction === 'down' ) {
								$('#header').addClass('header-collapsed-visible');
							}
							else if ( direction === 'up' ){
								$('#header').removeClass('header-collapsed-visible');
							}
						}, { offset: -240 } );

					}

					else if (sw <= navBreak) {
						$('#header').addClass('header-collapsed-visible').addClass('header-collapsed');
						$('body').waypoint('destroy');
					}
				},

				bindScrollToTop: function() {

					$(document).ready(function() {
						$('.scroll-top').on('tap click', function(e){
							$('html, body').animate({
								scrollTop: 0
							}, 750);
							e.preventDefault();
						});
					});

					$('body').waypoint(function(direction) {
						if ( direction === 'down' ) {
							$('.scroll-top').addClass('visible');
						}
						else if ( direction === 'up' ) {
							$('.scroll-top').removeClass('visible');
						}
					}, { offset: -560 });
				},

				setupSecondaryNav: function() {

					var secondaryNavBreak = 648;

					if (sw > secondaryNavBreak) {

						$('.collapsible').removeClass('collapsible-collapsed');

					}
					else if (sw <= secondaryNavBreak) {

						/*------------------------------------------------------------------
							Toggle widget
							https://github.com/filamentgroup/toggle
							Copyright (c) 2013 Filament Group, Inc.
							Licensed under the MIT, GPL licenses.
						 ------------------------------------------------------------------*/

						;(function ($, window, document, undefined) {

							// Defaults
							var pluginName = "collapsible";
							// overrideable defaults
							var defaults = {
								pluginClass: pluginName,
								collapsedClass: pluginName + "-collapsed",
								headerClass: pluginName + "-header",
								contentClass: pluginName + "-content",
								instructions: "Interact to toggle content",
								collapsed: true
							};

							// plugin constructor
							function Plugin(element, options) {
								this.element = $( element );
								var self = this,
									dataOptions = {};

								// Allow data-attr option setting
								if( this.element.is( "[data-config]" ) ){
									$.each( defaults, function( option ) {

										var value = self.element.attr( "data-" + option.replace( /[A-Z]/g, function( c ) {
														return "-" + c.toLowerCase();
													}));

										if ( value !== undefined ) {
											if( value === "true" || value === "false" ){
												dataOptions[ option ] = value === "true";
											}
											else {
												dataOptions[ option ] = value;
											}
										}
									});
								}

								this.options = $.extend( {}, defaults, dataOptions, options );
								this._defaults = defaults;
								this._name = pluginName;
								this.init();
							}

							Plugin.prototype = {
								init: function () {
									this.header = this.element.children().eq( 0 );
									this.content = this.header.next();
									this._addAttributes();
									this._bindEvents();
								},

								_addAttributes: function(){
									this.element.addClass( this.options.pluginClass );
									this.header.addClass( this.options.headerClass );
									this.header.attr( "title", this.options.instructions );
									this.header.attr( "role", "button" );
									this.header.attr( "aria-expanded", "true" );
									this.header.attr( "tabindex", "0" );
									this.content.addClass( this.options.contentClass );
								},

								_bindEvents: function(){
									var self = this;
									this.element
										.on( "expand", this.expand )
										.on( "collapse", this.collapse )
										.on( "toggle", this.toggle );
									this.header
										.on( "mouseup", function(){
											self.element.trigger( "toggle" );
										})
										.on( "keyup", function( e ){
											if( e.which === 13 || e.which === 32 ){
												self.element.trigger( "toggle" );
											}
										});
									if( this.options.collapsed ){
										this.collapse();
									}
								},

								collapsed: false,

								expand: function () {
									var self = $.data( this, "plugin_" + pluginName ) || this;
									self.element.removeClass( self.options.collapsedClass );
									self.collapsed = false;
									self.header.attr( "aria-expanded", "true" );
								},
								collapse: function() {
									var self = $.data( this, "plugin_" + pluginName ) || this;
									self.element.addClass( self.options.collapsedClass );
									self.collapsed = true;
									self.header.attr( "aria-expanded", "false" );
								},
								toggle: function(){
									var self = $.data( this, "plugin_" + pluginName );
									self.element.trigger( self.collapsed ? "expand" : "collapse" );
								}
							};

							// lightweight plugin wrapper around the constructor,
							// preventing against multiple instantiations
							$.fn[ pluginName ] = function (options) {
								return this.each(function () {
									if ( !$.data( this, "plugin_" + pluginName ) ) {
										$.data( this, "plugin_" + pluginName, new Plugin( this, options ));
									}
								});
							};

							// Simple auto-init by selector that runs when the dom is ready. Use if desirable.
							$(function(){
								$( "." + pluginName )[ pluginName ]();
							});

						})(jQuery, window, document);

					}
				},

				detectScrollBarWidth: function() {
					// http://davidwalsh.name/detect-scrollbar-width
					var scrollDiv = document.createElement("div");
					scrollDiv.className = "scrollbar-measure";
					document.body.appendChild(scrollDiv);
					scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
					document.body.removeChild(scrollDiv);
					navBreak = navBreak - scrollbarWidth;
				},

				setupMobileNavigation: function() {
					if (sw <= navBreak) {
						$('#header').addClass('header-collapsed');
						$('#header__primary-nav').mmenu(
							{
								position: 'right',
								slidingSubmenus: true
							},
							{
								labelClass: "label",
								clone: true
							}
						);
					}
					else if (sw > navBreak) {
						$('#header').removeClass('header-collapsed');
					}
				},

				destroyMobileNav: function() {
					if (sw >= navBreak)
						$('#mm-header__primary-nav').trigger('close');
				},

				bindLoginPageControls: function() {

					$('#login__current-user__btn, #login__create-acct__btn').on('click tap', function(e) {
						$(this).hide().next('form').fadeIn();
						e.preventDefault();
					});
				},

				setColHeights: function() {
					if (sw > navBreak && $('body').hasClass('page__cart')) {
						uiFunctions.site.setColumnHeight(['.cart__codes .col-1-2 div']);
					}
					else if (sw <= navBreak && $('body').hasClass('page__cart')) {
						uiFunctions.site.unsetColumnHeight(['.cart__codes .col-1-2 div']);
					}

					if (sw > 1200 && $('body').hasClass('page__about')) {
						uiFunctions.site.setColumnHeight(['.careers-list li']);
					}
					else if (sw <= 1200 && $('body').hasClass('page__about')) {
						uiFunctions.site.unsetColumnHeight(['.careers-list li']);
					}

					if (sw > 648 && $('body').hasClass('index')) {
						uiFunctions.site.setColumnHeight(['.featured-products__grid li']);
					}
					if (sw > 648 && $('body').hasClass('product-single')) {
						uiFunctions.site.setColumnHeight(['.related-products__grid ul li']);
					}
					if (sw > 648 && $('body').hasClass('page__recipes__category')) {
						uiFunctions.site.setColumnHeight(['.recipes__category__list li']);
					}
					if (sw > 648 && $('body').hasClass('page__shop') || $('body').hasClass('page__shop-option02')) {
						uiFunctions.site.setColumnHeight(['.shop-products__grid li']);
					}

					if (sw <= 648 && $('body').hasClass('index') ) {
						uiFunctions.site.unsetColumnHeight(['.featured-products__grid li']);
					}
					if (sw <= 648 && $('body').hasClass('product-single') ) {
						uiFunctions.site.unsetColumnHeight(['.related-products__grid ul li']);
					}
					if (sw <= 648 && $('body').hasClass('page__recipes__category')) {
						uiFunctions.site.unsetColumnHeight(['.recipes__category__list li']);
					}
					if (sw <= 648 && $('body').hasClass('page__shop') || $('body').hasClass('page__shop-option02')) {
						uiFunctions.site.unsetColumnHeight(['.shop-products__grid li']);
					}
				}

			},

			init: function() {

				$(document).ready(function() {

					var mantleSlider = $('.bxslider').bxSlider({
						adaptiveHeight: true,
						slideWidth: 1200,
						onSlideBefore: function($slideElement) {
							$slideElement.addClass('active').siblings().removeClass('active');
						},
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

					var feed = new Instafeed({
						get: 'user',
						userId: 297620473,
						limit: 1,
						resolution: 'standard_resolution',
						template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
						accessToken: '297620473.467ede5.171eabc183ba422eb49bbc58e526c50b'
					});

					if ($('body').hasClass('index')) {
						feed.run();
					}

					$('#cart-table').stacktable();
					$('.product-photos').appendAround();
					$('#product-preview').imagePreviewer();

				});

				$(window).load(function(){
					uiFunctions.site.setColHeights();
				});

				loadDynamicContent(dynamicImageData);
				uiFunctions.site.detectScrollBarWidth();
				uiFunctions.site.setupMobileNavigation();
				uiFunctions.site.setHeaderWaypoint();
				uiFunctions.site.setupSearchMenu();
				uiFunctions.site.setupSecondaryNav();
				uiFunctions.site.bindScrollToTop();
				uiFunctions.site.setFooterYear();
				uiFunctions.site.bindLoginPageControls();
				uiFunctions.site.setupScrollToLinks();

				$w.smartresize(function() {
					uiFunctions.site.setColHeights();
				});

				$w.resize(function() {
					sw = document.documentElement.clientWidth;
					sh = document.documentElement.clientHeight;
					uiFunctions.site.setupMobileNavigation();
					uiFunctions.site.setHeaderWaypoint();
					uiFunctions.site.destroyMobileNav();
					uiFunctions.site.setupSecondaryNav();
				});
			}
		}
})();
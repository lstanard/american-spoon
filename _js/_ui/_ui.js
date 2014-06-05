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
						$('#header').addClass('header-collapsed header-collapsed-visible');
					}

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

<<<<<<< HEAD
				setupSecondaryNav: function() {

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

				},

				bindLoginPageControls: function() {

					$('#login__current-user__btn, #login__create-acct__btn').on('click tap', function(e) {
						$(this).hide().next('form').fadeIn();
						e.preventDefault();
					});

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
						// Code to go back to desktop navigation
						$('#header').removeClass('header-collapsed');
					}
				}

			},

			init: function() {

				document.addEventListener("touchstart", function(){}, true);

				$('.featured-product__add-to-cart').on('click', function(e) {
					e.preventDefault();
					console.log('add to cart');
				});

				uiFunctions.site.setupMobileNavigation();
				uiFunctions.site.setHeaderWaypoint();
				uiFunctions.site.setupSearchMenu();

				$('.product-details').appendAround();
				$('.related-recipes').appendAround();

				$w.resize(function() {
					sw = document.documentElement.clientWidth;
					sh = document.documentElement.clientHeight;
					uiFunctions.site.setupMobileNavigation();
					uiFunctions.site.setHeaderWaypoint();
				});

			}

		}

})();
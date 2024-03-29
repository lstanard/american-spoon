var dynamicImageData = [
	{
		breakpoint: '633',
		image: '_img/as_stores_photo04.jpg',
		target: '.page__stores .photo-grid',
		location: 'append',
		customClass: 'tablet-img',
		parent: '<figure>'
	},
	{
		breakpoint: '1025',
		image: '_img/as_stores_photo05.jpg',
		target: '.page__stores .photo-grid',
		location: 'append',
		customClass: 'desktop-img',
		parent: '<figure>'
	},
	{
		breakpoint: '633',
		image: '_img/as_about_photo01.jpg',
		target: '.page__about .about__intro .photo-grid',
		location: 'prepend',
		customClass: 'tablet-img',
		parent: '<figure>'
	},
	{
		breakpoint: '1025',
		image: '_img/as_about_photo03.jpg',
		target: '.page__about .about__intro .photo-grid',
		location: 'append',
		customClass: 'desktop-img',
		parent: '<figure>'
	},
	{
		breakpoint: '633',
		image: '_img/as_about_photo05.jpg',
		target: '.page__about #our-kitchen .photo-grid',
		location: 'append',
		customClass: 'tablet-img',
		parent: '<figure>'
	},
	{
		breakpoint: '1025',
		image: '_img/as_about_photo06.jpg',
		target: '.page__about #our-kitchen .photo-grid',
		location: 'append',
		customClass: 'desktop-img',
		parent: '<figure>'
	},
	{
		breakpoint: '633',
		image: '_img/as_about_photo08.jpg',
		target: '.page__about #fruits-and-farmers .photo-grid',
		location: 'append',
		customClass: 'tablet-img',
		parent: '<figure>'
	},
	{
		breakpoint: '1025',
		image: '_img/as_about_photo09.jpg',
		target: '.page__about #fruits-and-farmers .photo-grid',
		location: 'append',
		customClass: 'desktop-img',
		parent: '<figure>'
	},
	{
		breakpoint: '633',
		image: '_img/as_about_photo10.jpg',
		target: '.page__about #press-and-awards .photo-grid',
		location: 'prepend',
		customClass: 'tablet-img',
		parent: '<figure>'
	},
	{
		breakpoint: '1025',
		image: '_img/as_about_photo12.jpg',
		target: '.page__about #press-and-awards .photo-grid',
		location: 'append',
		customClass: 'desktop-img',
		parent: '<figure>'
	},
	{
		breakpoint: '633',
		image: '_img/as_about_photo14.jpg',
		target: '.page__about #family-business .photo-grid',
		location: 'append',
		customClass: 'tablet-img',
		parent: '<figure>'
	},
	{
		breakpoint: '1025',
		image: '_img/as_about_photo15.jpg',
		target: '.page__about #family-business .photo-grid',
		location: 'append',
		customClass: 'desktop-img',
		parent: '<figure>'
	},
	{
		breakpoint: '1025',
		image: '_img/as_about_photo16.jpg',
		target: '.page__about #family-business .photo-grid',
		location: 'append',
		customClass: 'desktop-img',
		parent: '<figure>'
	},
	{
		breakpoint: '633',
		image: '_img/as_cafe_photo02.jpg',
		target: '.page__cafe .cafe__photo-grid01',
		location: 'append',
		customClass: 'tablet-img',
		parent: '<figure>'
	},
	{
		breakpoint: '1025',
		image: '_img/as_cafe_photo03.jpg',
		target: '.page__cafe .cafe__photo-grid01',
		location: 'append',
		customClass: 'desktop-img',
		parent: '<figure>'
	},
	{
		breakpoint: '633',
		image: '_img/as_cafe_photo05.jpg',
		target: '.page__cafe .cafe__photo-grid02',
		location: 'append',
		customClass: 'tablet-img',
		parent: '<figure>'
	},
	{
		breakpoint: '1025',
		image: '_img/as_cafe_photo06.jpg',
		target: '.page__cafe .cafe__photo-grid02',
		location: 'append',
		customClass: 'desktop-img',
		parent: '<figure>'
	},
	{
		breakpoint: '633',
		image: '_img/as_cafe_photo08.jpg',
		target: '.page__cafe .cafe__photo-grid03',
		location: 'append',
		customClass: 'tablet-img',
		parent: '<figure>'
	},
	{
		breakpoint: '1025',
		image: '_img/as_cafe_photo09.jpg',
		target: '.page__cafe .cafe__photo-grid03',
		location: 'append',
		customClass: 'desktop-img',
		parent: '<figure>'
	}
];

/*------------------------------------------------------------------
	Placeholders.js v3.0.2
-------------------------------------------------------------------*/

(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(D)?(t.removeAttribute(D),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(F),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(F)),r=t.getAttribute(P),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(D,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(F),r||(t.setAttribute(F,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(P),e?t.type="text":"password"===t.type&&M.changeType(t,"text")&&t.setAttribute(P,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):b,u=t?t.getElementsByTagName("textarea"):f,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){m&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)?M.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(D)&&A===t.getAttribute(V)&&M.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),M.moveCaret(t,0))}}function g(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)&&M.moveCaret(t,0)}}function v(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(M.addEventListener(T,"submit",v(T)),T.setAttribute(U,"true"))),M.addEventListener(t,"focus",o(t)),M.addEventListener(t,"blur",c(t)),m&&(M.addEventListener(t,"keydown",s(t)),M.addEventListener(t,"keyup",d(t)),M.addEventListener(t,"click",g(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(m||t!==r())&&a(t)}var b,f,m,h,A,y,E,x,L,T,N,S,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",D="data-placeholder-active",P="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",z="data-placeholder-live",F="data-placeholder-maxlength",G=document.createElement("input"),H=document.getElementsByTagName("head")[0],J=document.documentElement,K=t.Placeholders,M=K.Utils;if(K.nativeSupport=void 0!==G.placeholder,!K.nativeSupport){for(b=document.getElementsByTagName("input"),f=document.getElementsByTagName("textarea"),m="false"===J.getAttribute(q),h="false"!==J.getAttribute(z),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),H.insertBefore(y,H.firstChild),w=0,S=b.length+f.length;S>w;w++)N=b.length>w?b[w]:f[w-b.length],x=N.attributes.placeholder,x&&(x=x.nodeValue,x&&M.inArray(B,N.type)&&p(N));L=setInterval(function(){for(w=0,S=b.length+f.length;S>w;w++)N=b.length>w?b[w]:f[w-b.length],x=N.attributes.placeholder,x?(x=x.nodeValue,x&&M.inArray(B,N.type)&&(N.getAttribute(j)||p(N),(x!==N.getAttribute(V)||"password"===N.type&&!N.getAttribute(P))&&("password"===N.type&&!N.getAttribute(P)&&M.changeType(N,"text")&&N.setAttribute(P,"password"),N.value===N.getAttribute(V)&&(N.value=x),N.setAttribute(V,x)))):N.getAttribute(D)&&(n(N),N.removeAttribute(V));h||clearInterval(L)},100)}M.addEventListener(t,"beforeunload",function(){K.disable()}),K.disable=K.nativeSupport?e:i,K.enable=K.nativeSupport?e:l}(this);

/*------------------------------------------------------------------
	Debouncing function from John Hann
	http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
-------------------------------------------------------------------*/

(function($,sr){

	var debounce = function (func, threshold, execAsap) {

		var timeout;

		return function debounced () {

			var obj = this, args = arguments;
			function delayed () {
				if (!execAsap)
					func.apply(obj, args);
				timeout = null;
			};

			if (timeout)
				clearTimeout(timeout);
			else if (execAsap)
				func.apply(obj, args);

			timeout = setTimeout(delayed, threshold || 1000);

		};
	}

	jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

/*------------------------------------------------------------------
	TAPPY
	https://github.com/filamentgroup/tappy

	! Tappy! - a lightweight normalized tap event. Copyright 2013 @scottjehl, Filament Group, Inc. Licensed MIT

-------------------------------------------------------------------*/

(function( w, $, undefined ){

	// handling flag is true when an event sequence is in progress (thx androood)
	w.tapHandling = false;

	var tap = function( $els ){
		return $els.each(function(){

			var $el = $( this ),
				resetTimer,
				startY,
				startX,
				cancel,
				scrollTolerance = 10;

			function trigger( e ){
				$( e.target ).trigger( "tap", [ e, $( e.target ).attr( "href" ) ] );
				e.stopImmediatePropagation();
			}

			function getCoords( e ){
				var ev = e.originalEvent || e,
					touches = ev.touches || ev.targetTouches;

				if( touches ){
					return [ touches[ 0 ].pageX, touches[ 0 ].pageY ];
				}
				else {
					return null;
				}
			}

			function start( e ){
				if( e.touches && e.touches.length > 1 || e.targetTouches && e.targetTouches.length > 1 ){
					return false;
				}

				var coords = getCoords( e );
				startX = coords[ 0 ];
				startY = coords[ 1 ];
			}

			// any touchscroll that results in > tolerance should cancel the tap
			function move( e ){
				if( !cancel ){
					var coords = getCoords( e );
					if( coords && ( Math.abs( startY - coords[ 1 ] ) > scrollTolerance || Math.abs( startX - coords[ 0 ] ) > scrollTolerance ) ){
						cancel = true;
					}
				}
			}

			function end( e ){
				clearTimeout( resetTimer );
				resetTimer = setTimeout( function(){
					w.tapHandling = false;
					cancel = false;
				}, 1000 );

				if( e.ctrlKey || e.metaKey ){
					return;
				}

				e.preventDefault();

				// this part prevents a double callback from touch and mouse on the same tap

				// if a scroll happened between touchstart and touchend
				if( cancel || w.tapHandling && w.tapHandling !== e.type ){
					cancel = false;
					return;
				}

				w.tapHandling = e.type;
				trigger( e );
			}

			$el
				.bind( "touchstart MSPointerDown", start )
				.bind( "touchmove MSPointerMove", move )
				.bind( "touchend MSPointerUp", end )
				.bind( "click", end );
		});
	};

	// use special events api
	if( $.event && $.event.special ){
		$.event.special.tap = {
			add: function( handleObj ) {
				tap( $( this ), true );
			},
			remove: function( handleObj ) {
				tap( $( this ), false );
			}
		};
	}
	else{
		// monkeybind
		var oldBind = $.fn.bind;
		$.fn.bind = function( evt ){
			if( /(^| )tap( |$)/.test( evt ) ){
				tap( this );
			}
			return oldBind.apply( this, arguments );
		};
	}

}( this, jQuery ));

/*------------------------------------------------------------------
	APPEND AROUND
	https://github.com/filamentgroup/AppendAround

	appendAround markup pattern. [c]2012, @scottjehl, Filament Group, Inc. MIT/GPL
	how-to:
		1. Insert potential element containers throughout the DOM
		2. give each container a data-set attribute with a value that matches all other containers' values
		3. Place your appendAround content in one of the potential containers
		4. Call appendAround() on that element when the DOM is ready

-------------------------------------------------------------------*/

(function( $ ){
	$.fn.appendAround = function(){
	  return this.each(function(){

		var $self = $( this ),
			att = "data-set",
			$parent = $self.parent(),
			parent = $parent[ 0 ],
			attval = $parent.attr( att ),
			$set = $( "["+ att +"='" + attval + "']" );

		function isHidden( elem ){
			return $(elem).css( "display" ) === "none";
		}

		function appendToVisibleContainer(){
			if( isHidden( parent ) ){
				var found = 0;
				$set.each(function(){
					if( !isHidden( this ) && !found ){
						$self.appendTo( this );
						found++;
						parent = this;
					}
				});
			}
		}

		appendToVisibleContainer();

		$(window).bind( "resize", appendToVisibleContainer );

	  });
	};
}( jQuery ));

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
							$('.header__search-btn, .primary-nav__search').toggleClass('search-open');
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
							}, 500);
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

				setMantleBGImage: function() {
					var backgroundSrc = $('.home-mantle__featured img.mantle-feature-bgd').attr('src');
					$('.home-mantle__featured').css('background-image', 'url(' + backgroundSrc + ')');
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

					if ($('body').hasClass('page__cart')) {
						$.getScript('_js/_vendor/stacktable.min.js')
							.done(function() {
								$('#cart-table').stacktable();
							});
					}

					if ($('body').hasClass('index')) {

						$.getScript('_js/_vendor/instafeed.min.js')
							.done(function() {
								var feed = new Instafeed({
									get: 'user',
									userId: 297620473,
									limit: 1,
									resolution: 'standard_resolution',
									template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
									accessToken: '297620473.467ede5.171eabc183ba422eb49bbc58e526c50b'
								});

								feed.run();
							});

						uiFunctions.site.setMantleBGImage();

					}

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

/*------------------------------------------------------------------

	IMAGE PREVIEWER

	https://github.com/lstanard/jquery.image-preview

	'tap' event in handlers function requires tappy:
	https://github.com/filamentgroup/tappy

-------------------------------------------------------------------*/

(function($){

	$.fn.imagePreviewer = function(options) {

		var plugin = this,
			thumbs = [],
			photos = [],
			index = 0,
			settings = $.extend({
				photoWrap: '.product-photos__feature',
				thumbsWrap: '.product-photos__thumbnails'
			}, options||{} ),

			$w = $(window);

		plugin.init = function() {

			// Cycle through thumbnail items and push details to arrays
			$(settings.thumbsWrap).children().each(function(i, v) {
				thumbs.push({
					item: $(v),
					link: $(v).find('a'),
					img: $(v).find('img'),
					fullSize: $(v).find('a').attr('href')
				});
				photos.push($(v).find('a').attr('href'));
			});

			// Defer loading of additional full-sized images until page has finished loading
			$w.bind('load', function() {
				$(photos).each(function(i, v) {
					if (i > 0) {
						$(settings.photoWrap).append( '<img src="' + v + '" alt=" ">' );
					}
				});
				plugin.swapPhoto(0);
			});

			handlers();

			// Add active class to first item
			$(thumbs[0].item).addClass('active');

		};

		handlers = function() {
			// Bind event handler to thumbnail links
			$.each(thumbs, function(i, v) {
				$(this)[0].link.on('click tap', function(e) {
					if ( index !== i ) {
						$(v)[0].item.addClass('active').siblings().removeClass('active');
						plugin.swapPhoto(i);
					}
					index = i;
					e.preventDefault();
				});
			});
		};

		plugin.swapPhoto = function(num) {
			$(settings.photoWrap).children('img').each(function(i) {
				if (num === i) {
					$(this).show().siblings().hide();
				}
			});
		};

		if ( $(this.selector).length > 0 ) plugin.init();

	}

})(jQuery);

/*------------------------------------------------------------------

	RESPONSIVE IMAGE LOADER

-------------------------------------------------------------------*/

loadDynamicContent = function(imageData) {

	var $w = $(window),
		sw = document.documentElement.clientWidth;

	function contentLoader(index, info) {

		var entry = this;

		function createImgElem() {
			// Check if entry.imageElem exists
			if (!entry.imageElem) {
				// Create new image element
				entry.imageElem = $('<img class="' + entry.customClass + '" src="' + entry.image + '" alt="' + (entry.altAttr ? entry.altAttr : " ") + '">');
				// Add class 'img-loaded' to image once element has been created and inserted
				$(entry.imageElem[0]).addClass('img-loaded');
				// Wrap img with parent element if defined in image data object
				entry.imageElem = entry.parent ? $(entry.imageElem[0]).wrap(entry.parent).parent() : entry.imageElem;
			}
		}

		this.insertImage = function() {
			if ( $(this.target).length > 0 && $(this.target).find(this.imageElem).length === 0 && sw >= this.breakpoint ) {
				createImgElem();
				$(this.imageElem[0]).find('img').addClass('img-visible');
				this.location === 'prepend' ? $(this.target).prepend(this.imageElem) : $(this.target).append(this.imageElem);
			}
		};

		return this;

	};

	// Create individual image instances
	$.each(imageData, function(i, v) {
		var imageDetails = contentLoader.call(this, i, v);
		imageData[i] = imageDetails;
	});

	// On window load and resize check for new images to be inserted into DOM
	$w.on('load resize', function() {
		sw = document.documentElement.clientWidth;
		$.each(imageData, function(i, v) {
			v.insertImage();
		});
	});

};

/*------------------------------------------------------------------
	INITIALIZERS: UI components
-------------------------------------------------------------------*/

uiFunctions.init();
(function (factory) {
	// AMD compatibility
	// https://github.com/umdjs/umd/blob/6c10fc0af1e1692cf430c9eb7f530d6b5a5d758b/jqueryPlugin.js
	if (typeof define === 'function' && define.amd) {
		// AMD environment
		define(['jquery'], factory);
	} else {
		// Browser environment
		factory(jQuery);
	}
}(function($) {
	"use strict";
	/**
	 * @module jQuery
	 */
	
	// get our document once
	var $document = $(document);

	// Our true constructor function. See jQuery.CONSTRUCTOR.prototype.initialize for documentation
	$.CONSTRUCTOR = function() {
		this.initialize.apply(this, Array.prototype.slice.call(arguments));
	};
	/**
	 * Default options. Change these to globally change the default options
	 * See {{#crossLink "CONSTRUCTOR/constructor:method"}}constructor{{/crossLink}} for documentation on each option
	 * @property {Object} defaultOptions
	 * @static
	*/
	$.CONSTRUCTOR.defaultOptions = {
		
	};
	$.CONSTRUCTOR.prototype = {
		/**
		 * The current options. Starts with value given in constructor
		 * @property {Object} options
		 *   @param 
		 *   @param {Function} [options.onInitialize]  Add a {{#crossLink "CONSTRUCTOR/Initialize:event"}}Initialize event{{/crossLink}}
		 *   @example
	
	
	
		 */
		/**
		 * 
		 * @property {}
		 */				
		/**
		 * @class CONSTRUCTOR
		 * @constructor
		 * @example

	// Instantiate the OOP way
	var instance = new $.CONSTRUCTOR('selector', options)
		
	// Instantiate the jQuery way
	$('selector').METHOD(options);
	// call methods on the instance
	$('selector').METHOD('method', arg1, arg2);
	// initialize and get back instance
	var instance = $('selector').METHOD('getInstance');

		 * @param {String|jQuery|HTMLElement} $CONSTRUCTOR  The 
		 * @param {Object} [options=CONSTRUCTOR.defaultOptions] See {{#crossLink "CONSTRUCTOR/options:property"}}options property{{/crossLink}} for full documentation
		 */
		initialize: function($element, options) {
						
						
			/**
			 * Fired after initialization
			 * @event Initialize
			 * @param {}
			 * @ifprevented  The 
			 * @example       
			 
	

			 */						
		}
		
	}
  
	//
	// static properties and methods
	//
	$.CONSTRUCTOR.version = '%VERSION%';
	
	$.fn.METHOD = function(options) {  
		var instance = this.data('CONSTRUCTORInstance');
		// handle where first arg is method CONSTRUCTOR and additional args should be passed to that method
		if (typeof options == 'string' && instance instanceof $.CONSTRUCTOR && typeof this.data('CONSTRUCTORInstance')[options] == 'function') {
			var args = Array.prototype.slice.call(arguments, 1);
			return this.data('CONSTRUCTORInstance')[options].apply(this.data('CONSTRUCTORInstance'), args);
		}
		if (this.data('CONSTRUCTORInstance')) {
			return this;
		}
		// otherwise create new $.CONSTRUCTOR instance but return the jQuery instance
		return this.each(function() {     
			var $elem = $(this);
			var instance = new Ctor($elem, options);
			$elem.data('CONSTRUCTORInstance', instance);
		});
	}
	
}));  

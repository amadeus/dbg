/*
 *
 *  name: dbg
 *
 *  description: A bad ass little console utility, check the README for deets
 *
 *  license: MIT-style license
 *
 *  author: Amadeus Demarzi
 *
 *  provides: window.dbg
 *
 */

(function(){

var console, methods, empty, i;

console = this.console || {};

// Empty method used when dbg is disabled or console doesn't exist
empty = function(){};

// Supported console methods
methods = 'debug,error,info,log,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear'.split(',');

// Namespace
this.dbg = ({

	// Attaches console methods to dbg if they exist, otherwise fall back to
	// the `empty` function. `bind` is required to avoid an Invalid Invocation error
	enable: function(){
		for (i = 0; i < methods.length; i++){
			this[methods[i]] = console[name] ? console[name].bind(console) : empty;
		}
		return this;
	},

	// Disable dbg
	disable: function(){
		for (i = 0; i < methods.length;i++){
			this[methods[i]] = empty;
		}
		return this;
	}

}).enable();

}).call(this);

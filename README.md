# dbg


## Purpose

Provide an easy to type, safe for all browsers, and toggleable console wrapper.

Yes, it preserves line numbers.


## Usage

Simply include dbg.js in your site and use any of the methods you wish:

    dbg.log('look, this is a log');
    dbg.warn('it supports warnings and a heap of other methods as well as well!');
    dbg.info('just check the source for all supported methods');


### dbg.disable / dbg.enable

By default, dbg is enabled, but you can disable dbg as shown below:

    dbg.disable();

A disabled dbg will not print any methods or perform any utility functions like timing or profiling.

Enabling is only necessary if you disabled previously:

    dbg.enable();

All log messages and utility methods will work on supporting browsers, those that don't support them will simply execute silently.



### Notes:

I will not provide any sort of fallback functionality for browsers that do not support console functionality as that is out of scope for this plugin. The intentions are simple: never cause a browser to throw an error with unsupported console.logs or related functions.

License: [MIT-style licensea](http://en.wikipedia.org/wiki/MIT_License)

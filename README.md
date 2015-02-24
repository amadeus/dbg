# dbg

An easy to type `console` wrapper

## Features

* Simpler to type
* Will fail silently on browsers or environments that don't support `console`
* Can be enabled or disabled (useful in production)
* Preserves line number


## Usage

Simply include dbg.js in your site and use any of the methods you wish:

    dbg.log('look, this is a log');
    dbg.warn('it supports warnings and a heap of other methods as well as well!');
    dbg.info('just check the source for all supported methods');


### `dbg.disable` / `dbg.enable`

By default, dbg is enabled, but you can disable dbg as shown below:

    dbg.disable();

A disabled dbg will never print any methods or perform any utility functions like
timing or profiling.  Often it's useful to have an initialize check and disable
dbg in production so you don't inadvertently spit out console messages or
perform any sort of profiling in production.

Enabling is only necessary if you previously disabled:

    dbg.enable();

All log messages and utility methods will work on supporting browsers, those
that don't support them will simply fail silently.


License: [MIT-style license](http://en.wikipedia.org/wiki/MIT_License)

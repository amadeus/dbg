(function(){
	var global = this,
		realConsole = global.console || null,
		fn = function(){},
		disabledConsole = {
			log: fn,
			warn: fn,
			info: fn,
			enable: function(quiet){
				global.dbg = realConsole ? realConsole : disabledConsole;
				if (!quiet) global.dbg.log('dbg enabled.');
			},
			disable: function(){
				global.dbg = disabledConsole;
			}
		};

	if (realConsole) {
		realConsole.disable = disabledConsole.disable;
		realConsole.enable = disabledConsole.enable;
	}

	disabledConsole.enable(true);
}).call(this);
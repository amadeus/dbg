(function(){
	var realConsole = window.console || null,
		fn = function(){},
		disabledConsole = {
			log: fn,
			warn: fn,
			info: fn,
			enable: function(quiet){
				window.dbg = realConsole ? realConsole : disabledConsole;
				if (!quiet) window.dbg.log('dbg enabled.');
			},
			disable: function(){
				window.dbg = disabledConsole;
			}
		};

	if (realConsole) {
		realConsole.disable = disabledConsole.disable;
		realConsole.enable = disabledConsole.enable;
	}

	disabledConsole.enable(true);
})();
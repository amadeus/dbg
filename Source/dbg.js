(function(){
	// Get real console, if it exists
	var realConsole = window.console || null;

	// Create disabled console
	var disabledConsole = {
		log:   function() { return; },
		warn:  function() { return; },
		info:  function() { return; },
		enable: function(quiet){
			window.dbg = realConsole ? realConsole : disabledConsole;
			if (!quiet) window.dbg.log('dbg enabled.');
		},
		disable:function(){
			window.dbg = disabledConsole;
		}
	};

	// Extend real console with enable/disable
	if (realConsole) {
		realConsole.disable = disabledConsole.disable;
		realConsole.enable = disabledConsole.enable;
	}
	
	// Setup dbg
	disabledConsole.enable(true);
})();



const scriptsInEvents = {

	async Emenu_Event18_Act1(runtime, localVars)
	{
		
		document.addEventListener('keydown', function(event) {
		
		  if (event.key === 'F11') {
		    event.preventDefault(); 
		    
		  }
		});
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;


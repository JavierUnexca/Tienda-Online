 let buclePrincipal = {
	 idEjecution:null,
	 ultimoRegistro:0,
	 aps:0,
	 fps:0,
	 iterar:function(registroTemporal){
		buclePrincipal.idEjecution = window.requestAnimatedFrame(buclePrincipal.iterar);
		
	buclePrincipal.actualizar(registroTemporal);
	buclePrincipal.dibujar();
	 
	 if(registroTemporal - buclePrincipal.ultimoRegistro > 999){
			buclePrincipal.ultimoRegistro = registroTemporal;
			console.log("APS: " + buclePrincipal.aps + " FPS: " + buclePrincipal.fps);
			buclePrincipal.aps = 0;
			buclePrincipal.fps = 0;
			
		}
	},	
	detener: function() {
		
	},
	actualizar: function(registroTemporal) {
		buclePrincipal.aps++;
	},
	dibujar: function(registroTemporal) {
		buclePrincipal.fps++;
	}
 }
	 document.addEventListener("DOMContentLoaded", function() {
	inicio.iniciarJuego();
}, false);

var inicio = {
	iniciarJuego: function(){
		console.log("Juego iniciado");
		buclePrincipal.iterar();
	}
};
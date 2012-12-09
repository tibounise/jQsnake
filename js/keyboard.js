function Keyboard(layout) {
	/*--~ Variables ~--*/
	this.layout = 'AZERTY';

	/*--~ Functions ~--*/
	this.setLayout = function(layout) {
		if (layout == 'AZERTY') {
			this.setAZERTY();
			this.layout = layout;
		}
		else if (layout == 'QWERTY') {
			this.setQWERTY();
			this.layout = layout;
		}
	};
	this.setAZERTY = function() {
		$(document).keypress(function(event){
			if (event.keyCode == 13 && game.launched == false) {
				game.startGame();
			}
			else if (game.launched == true) {
				switch (event.charCode) {
					case 32:
						if (!game.ended && !game.paused) {
							game.toggleGame();
						}
						break;

					// HP1 AZERTY KEYS
					case 122:
						game.sendKey('UP',1);
						break;
					case 115:
						game.sendKey('DOWN',1);
						break;
					case 113:
						game.sendKey('LEFT',1);
						break;
					case 100:
						game.sendKey('RIGHT',1);
						break;

					// HP2 AZERTY KEYS
					case 116:
						game.sendKey('UP',2);
						break;
					case 103:
						game.sendKey('DOWN',2);
						break;
					case 102:
						game.sendKey('LEFT',2);
						break;
					case 104:
						game.sendKey('RIGHT',2);
						break;

					// HP3 AZERTY KEYS
					case 105:
						game.sendKey('UP',3);
						break;
					case 107:
						game.sendKey('DOWN',3);
						break;
					case 106:
						game.sendKey('LEFT',3);
						break;
					case 108:
						game.sendKey('RIGHT',3);
						break;

					// HP4 AZERTY KEYS
					case 56:
						game.sendKey('UP',4);
						break;
					case 53:
						game.sendKey('DOWN',4);
						break;
					case 52:
						game.sendKey('LEFT',4);
						break;
					case 54:
						game.sendKey('RIGHT',4);
						break;

					// AZERTY DEFAULT
					default:
						console.log('Touche non trouvée : ' + event.charCode);
						break;
				}
			}
		});
	};
	this.setQWERTY = function() {
		$(document).keypress(function(event){
			if (event.keyCode == 13 && game.launched == false) {
				game.startGame();
			}
			else if (game.launched == true) {
				switch (event.charCode) {
					case 32:
						game.toggleGame();
						console.log('LOL');
						break;

					// HP1 AZERTY KEYS
					case 119:
						game.sendKey('UP',1);
						break;
					case 115:
						game.sendKey('DOWN',1);
						break;
					case 97:
						game.sendKey('LEFT',1);
						break;
					case 100:
						game.sendKey('RIGHT',1);
						break;

					// HP2 AZERTY KEYS
					case 102:
						game.sendKey('UP',2);
						break;
					case 103:
						game.sendKey('DOWN',2);
						break;
					case 104:
						game.sendKey('LEFT',2);
						break;
					case 116:
						game.sendKey('RIGHT',2);
						break;

					// HP3 AZERTY KEYS
					case 105:
						game.sendKey('UP',3);
						break;
					case 107:
						game.sendKey('DOWN',3);
						break;
					case 106:
						game.sendKey('LEFT',3);
						break;
					case 108:
						game.sendKey('RIGHT',3);
						break;

					// HP4 AZERTY KEYS
					case 56:
						game.sendKey('UP',4);
						break;
					case 53:
						game.sendKey('DOWN',4);
						break;
					case 52:
						game.sendKey('LEFT',4);
						break;
					case 54:
						game.sendKey('RIGHT',4);
						break;

					// AZERTY DEFAULT
					default:
						console.log('Touche non trouvée : ' + event.charCode);
						break;
				}
			}
		});
	};
}
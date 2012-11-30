// CONFIGURATOR //
/*

	~TODO
		Line 111 : Add the bots

*/

function Configurator() {
	/*--~ Functions ~--*/
	this.init = function() {
		// Initialisation of the popovers
		for (var i = 1; i < 5; i++) {
			$('#hp' + i).popover({
				trigger: 'hover',
				title: 'Joueur humain #' + i,
				content: '<img src="img/hp' + i + '-keyboard.png">',
				placement: 'bottom'
			});
		};

		// Set the acitons for the play button
		$('#playButton').click(function () {
			if (configurator.isAbleToLauch()) {
				$('#configPanel').fadeToggle();
				configurator.launchGame();
			}
			else {
				$('#errorbox').hide().html('<div class="alert alert-error">Séléctionnez au moins 2 joueur physique ou virtuel</div>').delay(400).fadeIn(200);
			}
		});

		// Set the AZERTY button to default
		$('#azerty_keyboard').button('toggle');

		// Set the colorized buttons
		this.colorButton('#hp2','btn-primary');
		this.colorButton('#hp3','btn-warning');
		this.colorButton('#hp4','btn-danger');

		this.colorButton('#bot1','btn-violet');
		this.colorButton('#bot2','btn-pink');
		this.colorButton('#bot3','btn-lime');
	};
	this.isAbleToLauch = function() {
		// Check if there's at least 2 or more players in the game
		var players = 0;
		for (var i = 1; i < 5; i++) {
			if ($('#hp' + i).hasClass('active')) {
				players++;
			}
			if ($('#bot' + i).hasClass('active')) {
				players++;
			}
		};

		if (players >= 2) {
			return true;
		}
		else {
			return false;
		}
	};
	this.launchGame = function() {
		// Set the keyboard
		if ($("#azerty_keyboard").hasClass('active')) {
			keyboard.setLayout('AZERTY');
		}
		else if ($("#qwerty_keyboard").hasClass('active')) {
			keyboard.setLayout('QWERTY');
		}
		else {
			keyboard.setLayout('AZERTY');
		}

		// Add the human players
		if ($("#hp1").hasClass('active')) {
			game.addPlayer({
				identifier:1,
				bot: false,
				ia: false,
				position: [0,48],
				direction: 'RIGHT'
			});
		}
		if ($("#hp2").hasClass('active')) {
			game.addPlayer({
				identifier:2,
				bot: false,
				ia: false,
				position: [48,49],
				direction: 'UP'
			});
		}
		if ($("#hp3").hasClass('active')) {
			game.addPlayer({
				identifier:3,
				bot: false,
				ia: false,
				position: [49,1],
				direction: 'LEFT'
			});
		}
		if ($("#hp4").hasClass('active')) {
			game.addPlayer({
				identifier:4,
				bot: false,
				ia: false,
				position: [1,0],
				direction: 'DOWN'
			});
		}

		// Add the bots players
		if ($("#bot1").hasClass('active')) {
			game.addPlayer({
				identifier:5,
				bot: true,
				ia: 1,
				position: [1,1],
				direction: 'DOWN'
			});
		}
		if ($("#bot2").hasClass('active')) {
			game.addPlayer({
				identifier:6,
				bot: true,
				ia: 1,
				position: [1,48],
				direction: 'LEFT'
			});
		}
		if ($("#bot3").hasClass('active')) {
			game.addPlayer({
				identifier:7,
				bot: true,
				ia: false,
				position: [48,1],
				direction: 'RIGHT'
			});
		}
		if ($("#bot4").hasClass('active')) {
			game.addPlayer({
				identifier:8,
				bot: true,
				ia: false,
				position: [48,48],
				direction: 'UP'
			});
		}
		
		canvas.init();
	};
	this.colorButton = function(button,cssClass) {
		$(button).click(function() {
			if ($(button).hasClass('active')) {
				$(button).removeClass(cssClass);
			}
			else {
				$(button).addClass(cssClass);
			}
		});
	};
}
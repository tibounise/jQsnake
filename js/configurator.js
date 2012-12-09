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
				html: true,
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
		} else {
			return false;
		}
	};
	this.launchGame = function() {

		// Add the human players
		if ($("#hp1").hasClass('active')) {
			game.addPlayer({
				identifier:1,
				bot: false,
				ia: false,
				position: [0,48],
				direction: 'RIGHT',
				traceColor: '#bbb'
			});
		}
		if ($("#hp2").hasClass('active')) {
			game.addPlayer({
				identifier:2,
				bot: false,
				ia: false,
				position: [48,49],
				direction: 'UP',
				traceColor: '#1a58c7'
			});
		}
		if ($("#hp3").hasClass('active')) {
			game.addPlayer({
				identifier:3,
				bot: false,
				ia: false,
				position: [49,1],
				direction: 'LEFT',
				traceColor: '#e89630'
			});
		}
		if ($("#hp4").hasClass('active')) {
			game.addPlayer({
				identifier:4,
				bot: false,
				ia: false,
				position: [1,0],
				direction: 'DOWN',
				traceColor: '#ab4435'
			});
		}

		// Add the bots players
		if ($("#bot1").hasClass('active')) {
			game.addPlayer({
				identifier:5,
				bot: true,
				ia: 2,
				position: [1,1],
				direction: 'DOWN',
				traceColor: '#741f77'
			});
		}
		if ($("#bot2").hasClass('active')) {
			game.addPlayer({
				identifier:6,
				bot: true,
				ia: 2,
				position: [1,48],
				direction: 'LEFT',
				traceColor: '#e945dc'
			});
		}
		if ($("#bot3").hasClass('active')) {
			game.addPlayer({
				identifier:7,
				bot: true,
				ia: 1,
				position: [48,1],
				direction: 'RIGHT',
				traceColor: '#e945dc'
			});
		}
		if ($("#bot4").hasClass('active')) {
			game.addPlayer({
				identifier:8,
				bot: true,
				ia: 2,
				position: [48,48],
				direction: 'UP',
				traceColor: '#e945dc'
			});
		}
		
		switch ($('#speed option:selected').val()) {
			case 'slow':
				timer.period = 300;
				break;

			case 'normal':
				timer.period = 40;
				break;

			case 'fast':
				timer.period = 1;
				break;

			default:
				timer.period = 40;
				break;
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
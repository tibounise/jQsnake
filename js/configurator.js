// CONFIGURATOR //

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
			if () {
				$('#configPanel').fadeToggle();
				this.launchGame();
			}
			else {
				$('#errorbox').hide().html('<div class="alert alert-error">Séléctionnez au moins 1 joueur physique ou virtuel</div>').delay(400).fadeIn(200);
			}
		});

		// Set the AZERTY button to default
		$('#azerty_keyboard').button('toggle');

		// Set the colorized buttons
		this.colorButton('#hp2','btn-primary');
		this.colorButton('#hp3','btn-info');
		this.colorButton('#hp4','btn-success');
	};
	this.launchGame = function() {
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
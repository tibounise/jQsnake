// INITIALISATION //

function initConfigPanel() {
	/*--~ Initialisation of the popovers ~--*/
	$('#hp1').popover({
		trigger: 'hover',
		title: 'Joueur humain #1',
		content: '<img src="img/hp1-keyboard.png">',
		placement: 'bottom'
	});
	$('#hp2').popover({
		trigger: 'hover',
		title: 'Joueur humain #2',
		content: '<img src="img/hp2-keyboard.png">',
		placement: 'bottom'
	});
	$('#hp3').popover({
		trigger: 'hover',
		title: 'Joueur humain #3',
		content: '<img src="img/hp3-keyboard.png">',
		placement: 'bottom'
	});
	$('#hp4').popover({
		trigger: 'hover',
		title: 'Joueur humain #4',
		content: '<img src="img/hp4-keyboard.png">',
		placement: 'bottom'
	});

	/*--~ Initialisation of the "Play" button ~--*/
	$('#playButton').click(function () {
		$('#configPanel').fadeToggle();
		initGameCanvas();
	});

	/*--~ Initialisation of the players buttons ~--*/
	$('#hp2').click(function() {
		if ($('#hp2').hasClass('active')) {
			$('#hp2').removeClass('btn-primary');
		}
		else {
			$('#hp2').addClass('btn-primary');
		}
	});

	$('#hp3').click(function() {
		if ($('#hp3').hasClass('active')) {
			$('#hp3').removeClass('btn-info');
		}
		else {
			$('#hp3').addClass('btn-info');
		}
	});

	$('#hp4').click(function() {
		if ($('#hp4').hasClass('active')) {
			$('#hp4').removeClass('btn-success');
		}
		else {
			$('#hp4').addClass('btn-success');
		}
	});

	/*--~ Set the AZERTY button by default ~--*/
	$('#azerty_keyboard').button('toggle');
}

function initGameCanvas() {
	// Get the players settings
	getGameSettings();
	
	// Initialisation of the modal
	$('#gameView').delay(350).fadeToggle();

	// Initialisation of the keyboard handler
	initKeyboardHandler();

	// Display a white rectangle and an image
	$("#gameCanvas").drawRect({
		fillStyle: "#fff",
		x: 0, y: 0,
		width: 500,
		height: 500,
		fromCenter: false
	}).drawImage({
		source: "img/boot.png",
		x: 0,
		y: 0,
		fromCenter: false
	});
}

function launchGame() {
	gameLaunched = true;
	$("#gameCanvas").clearCanvas();
	displayInfo('Jeu lancé');
	makeMap();
	makeDirection();
	startTimer();
	$('#pauseModal').on('hidden', function() {
		startTimer();
	});
}

// ALERTS //

function displayInfo(info) {
	$('#gameAlert').html($('#gameAlert').html() + '<div class="alert alert-info">' + info + '</div>');
}

// PARAMETERS //

function getGameSettings() {
	hp_enabled[0] = $('#hp1').hasClass('active');
	hp_enabled[1] = $('#hp2').hasClass('active');
	hp_enabled[2] = $('#hp3').hasClass('active');
	hp_enabled[3] = $('#hp4').hasClass('active');

	bot_enabled[0] = $('#bot1').hasClass('active');
	bot_enabled[1] = $('#bot2').hasClass('active');
	bot_enabled[2] = $('#bot3').hasClass('active');
	bot_enabled[3] = $('#bot4').hasClass('active');
}
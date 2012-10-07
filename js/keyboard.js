function initKeyboardHandler() {
	if ($("#azerty_keyboard").hasClass('active')) {
		initAzerty();
	}
	else {
		initQwerty();
	}
}

function initAzerty() {
	$('body').keypress(function(event) {
		KeyCode = event.keyCode;
		if (KeyCode == 13 && gameLaunched != true) {
			console.log('Game launched');
			launchGame();
		}
		if (KeyCode != 13 && gameLaunched == true) {
			switch (KeyCode) {
				// Pause keys //
				case 32:
					if (timer != null) {
						stopTimer();
						$('#pauseModal').modal('show');
					}
					break;

				// HUMAN PLAYER 1 KEYS //
				case 122:
					if (direction_hp3 != DOWN) {
						direction_hp1 = UP; // Up
					}
					break;
				case 115:
					if (direction_hp3 != UP){
						direction_hp1 = DOWN; // Down
					}
					break;
				case 113:
					if (direction_hp3 != RIGHT){
						direction_hp1 = LEFT; // Left
					}
					break;
				case 100:
					if (direction_hp3 != LEFT){
						direction_hp1 = RIGHT; // Right
					}
					break;

				// HUMAN PLAYER 2 KEYS //
				case 102:
					if (direction_hp3 != DOWN) {
						direction_hp2 = UP; // Up
					}
					break;
				case 103:
					if (direction_hp3 != UP){
						direction_hp2 = DOWN; // Down
					}
					break;
				case 104:
					if (direction_hp3 != RIGHT){
						direction_hp2 = LEFT; // Left
					}
					break;
				case 116:
					if (direction_hp3 != LEFT){
						direction_hp2 = RIGHT; // Right
					}
				
				// HUMAN PLAYER 3 KEYS //
				case 105:
					if (direction_hp3 != DOWN){
						direction_hp3 = UP; // Up
					}
					break;
				case 107:
					if (direction_hp3 != UP) {
						direction_hp3 = DOWN; // Down
					}
					break;
				case 106:
					if (direction_hp3 != RIGHT){
						direction_hp3 = LEFT; // Left
					}
					break;
				case 108:
					if (direction_hp3 != LEFT){
						direction_hp3 = RIGHT; // Right
					}
					
				// HUMAN PLAYER 4 KEYS //
				case 56:
					if (direction_hp3 != DOWN) {
						direction_hp4 = UP; // Up
					}
					break;
				case 53:
					if (direction_hp3 != UP){
						direction_hp4 = DOWN; // Down
					}
					break;
				case 52:
					if (direction_hp3 != RIGHT){
						direction_hp4 = LEFT; // Left
					}
					break;
				case 54:
					if (direction_hp3 != LEFT){
						direction_hp4 = RIGHT; // Right
					}

				default:
					// DEBUG //
					console.log(KeyCode);
					break;
			}
		}
	});
}

function initQwerty() {
	$('body').keypress(function(event) {
		KeyCode = event.keyCode;
		if (KeyCode == 13 && gameLaunched != true) {
			console.log('Game launched');
			launchGame();
		}
		if (KeyCode != 13 && gameLaunched == true) {
			switch (KeyCode) {
				// Pause keys //
				case 32:
					if (timer != null) {
						stopTimer();
						$('#pauseModal').modal('show');
					}
					break;

				// HUMAN PLAYER 1 KEYS //
				case 119:
					if (direction_hp3 != DOWN) {
						direction_hp1 = UP; // Up
					}
					break;
				case 115:
					if (direction_hp3 != UP){
						direction_hp1 = DOWN; // Down
					}
					break;
				case 97:
					if (direction_hp3 != RIGHT){
						direction_hp1 = LEFT; // Left
					}
					break;
				case 100:
					if (direction_hp3 != LEFT){
						direction_hp1 = RIGHT; // Right
					}
					break;

				// HUMAN PLAYER 2 KEYS //
				case 102:
					if (direction_hp3 != DOWN) {
						direction_hp2 = UP; // Up
					}
					break;
				case 103:
					if (direction_hp3 != UP){
						direction_hp2 = DOWN; // Down
					}
					break;
				case 104:
					if (direction_hp3 != RIGHT){
						direction_hp2 = LEFT; // Left
					}
					break;
				case 116:
					if (direction_hp3 != LEFT){
						direction_hp2 = RIGHT; // Right
					}
				
				// HUMAN PLAYER 3 KEYS //
				case 105:
					if (direction_hp3 != DOWN){
						direction_hp3 = UP; // Up
					}
					break;
				case 107:
					if (direction_hp3 != UP) {
						direction_hp3 = DOWN; // Down
					}
					break;
				case 106:
					if (direction_hp3 != RIGHT){
						direction_hp3 = LEFT; // Left
					}
					break;
				case 108:
					if (direction_hp3 != LEFT){
						direction_hp3 = RIGHT; // Right
					}
					
				// HUMAN PLAYER 4 KEYS //
				case 56:
					if (direction_hp3 != DOWN) {
						direction_hp4 = UP; // Up
					}
					break;
				case 53:
					if (direction_hp3 != UP){
						direction_hp4 = DOWN; // Down
					}
					break;
				case 52:
					if (direction_hp3 != RIGHT){
						direction_hp4 = LEFT; // Left
					}
					break;
				case 54:
					if (direction_hp3 != LEFT){
						direction_hp4 = RIGHT; // Right
					}

				default:
					// DEBUG //
					console.log(KeyCode);
					break;
			}
		}
	});
}
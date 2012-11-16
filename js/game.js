// GAME //

function Game() {
	/*--~ Variables ~--*/
	this.launched = false;
	this.paused = false;
	this.players = [];

	/*--~ Functions ~--*/
	this.startGame = function() {
		notification.blueNote('Jeu lancé');
		this.launched = true;
		map.makeMap();
		timer.startTimer();

		canvas.clearCanvas();

		// Register the closing of the pause modal
		$('#pauseModal').on('hidden', function() {
			game.toggleGame();
		});
	};
	this.toggleGame = function() {
		if (!this.paused) {
			$('#pauseModal').modal('show');
			timer.stopTimer();
			this.paused = true;
		}
		else {
			$('#pauseModal').modal('hide');
			timer.startTimer();
			this.paused = false;
		}
	};
	this.sendKey = function(direction,player) {
		for (var i = this.players.length - 1; i >= 0; i--) {
			if (this.players[i].identifier == player) {
				if (direction == 'UP' && this.players[i].direction != 'DOWN') {
					this.players[i].direction = direction;
				}
				else if (direction == 'DOWN' && this.players[i].direction != 'UP') {
					this.players[i].direction = direction;
				}
				else if (direction == 'LEFT' && this.players[i].direction != 'RIGHT') {
					this.players[i].direction = direction;
				}
				else if (direction == 'RIGHT' && this.players[i].direction != 'LEFT') {
					this.players[i].direction = direction;
				}
			}
		};
	};
	this.addPlayer = function(array) {
		this.players.push(new Player(array));
	};
	this.gameCycle = function() {
		for (var i = this.players.length - 1; i >= 0; i--) {
			if (this.players[i].alive) {
				this.players[i].meditateDirection();
			}
		}
		if (!this.checkLife()) {
			timer.stopTimer();
		}
		canvas.refresh();
	};
	this.checkLife = function() {
		for (var i = this.players.length - 1; i >= 0; i--) {
			if ($.inArray(this.players[i].alive)) {
				return true;
				break;
			}
		}
		return false;
	};
}
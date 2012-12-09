function Game() {
	/*--~ Variables ~--*/
	this.launched = false;
	this.paused = false;
	this.players = [];
	this.fast = false;
	this.ended = false;

	/*--~ Functions ~--*/
	this.startGame = function() {
		notification.blueNote('Jeu lancé');
		this.launched = true;
		map.makeMap();
		timer.startTimer();

		canvas.clearCanvas();

		$('#pauseModal').on('hidden', function() {
			game.toggleGame();
		});
	};
	this.toggleGame = function() {
		if (!this.paused) {
			this.paused = true;
			$('#pauseModal').modal('show');
			timer.stopTimer();
		}
		else {
			this.paused = false;
			$('#pauseModal').modal('hide');
			timer.startTimer();
		}
	};
	this.sendKey = function(direction,player) {
		for (var i = this.players.length;i--;) {
			if (this.players[i].identifier == player) {
				if ((direction == 'UP' && this.players[i].direction != 'DOWN') || (direction == 'DOWN' && this.players[i].direction != 'UP') || (direction == 'LEFT' && this.players[i].direction != 'RIGHT') || (direction == 'RIGHT' && this.players[i].direction != 'LEFT')) {
					this.players[i].direction = direction;
				}
				break;
			}
		};
	};
	this.addPlayer = function(array) {
		this.players.push(new Player(array));
	};
	this.gameCycle = function() {
		for (var i = this.players.length;i--;) {
			if (this.players[i].alive) {
				if (this.players[i].bot) {
					this.sendKey(bots.doStrategy({
						strategy : this.players[i].ia,
						position : this.players[i].position,
						direction : this.players[i].direction
					}),this.players[i].identifier);
				}
				this.players[i].meditateDirection();
			}
		}
		if (!this.checkLife()) {
			timer.stopTimer();
			conclusion.conclusion();
		}
		map.makeDots();
		canvas.refresh();
	};
	this.checkLife = function() {
		players = 0;
		for (var i = this.players.length;i--;) {
			if (this.players[i].alive) {
				players++;
			}
		}
		if (players > 1) {
			return true;
		} else {
			return false;
		}
	};
}
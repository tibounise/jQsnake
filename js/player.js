function Player(array) {
	/*--~ Variables ~--*/
	this.identifier = array.identifier;
	this.bot = array.bot;
	this.ia = array.ia;
	this.position = array.position;
	this.prePosition = array.position;
	this.direction = array.direction;
	this.alive = true;

	/*--~ Functions ~--*/
	this.meditateDirection = function() {
		if (this.direction == 'UP' && this.position[1] > 0) {
			this.prePosition[1] = this.position[1] - 1;
		}
		else if (this.direction == 'DOWN' && this.position[1] < 49) {
			this.prePosition[1] = this.position[1] + 1;
		}
		else if (this.direction == 'LEFT' && this.position[0] > 0) {
			this.prePosition[0] = this.position[0] - 1;
		}
		else if (this.direction == 'RIGHT' && this.position[0] < 49) {
			this.prePosition[0] = this.position[0] + 1;
		}
		else {
			this.alive = false;
			notification.redNote('<strong>Joueur ' + this.identifier + ' est mort (collision sur un mur).</strong> <small><i>Position : ' + this.prePosition[0] + ';' + this.prePosition[1] + '</small>');
		}

		if (this.alive) {
			this.checkPreCrash();
		}
	};
	this.applyDirection = function() {
		this.position = this.prePosition;
	};
	this.checkPreCrash = function() {
		samePositionPlayers = [];
		for (var i = game.players.length - 1; i >= 0; i--) {
			if (this.prePosition[0] == game.players[i].prePosition[0] && this.prePosition[1] == game.players[i].prePosition[1] && this.identifier != game.players[i].identifier && this.alive) {
				samePositionPlayers.push(game.players[i]);
			}
		};
		if (samePositionPlayers.length >= 1) {
			for (var i = samePositionPlayers.length - 1; i >= 0; i--) {
				samePositionPlayers[i].alive = false;
			};
			this.alive = false;
			notification.redNote('<strong>Mort de ' + samePositionPlayers.length + ' joueurs à la même position.');
		} else {
			this.applyDirection();
		}
	};
}
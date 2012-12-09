function Player(array) {
	/*--~ Variables ~--*/
	this.identifier = array.identifier;
	this.bot = array.bot;
	this.ia = array.ia;
	this.position = array.position;
	this.prePosition = array.position;
	this.direction = array.direction;
	this.alive = true;
	this.move = 0;
	this.traceColor = array.traceColor;

	/*--~ Functions ~--*/
	this.meditateDirection = function() {
		if (this.direction == 'UP' && this.position[1] > 0) {
			this.prePosition[1] = this.position[1] - 1;
		} else if (this.direction == 'DOWN' && this.position[1] < 49) {
			this.prePosition[1] = this.position[1] + 1;
		} else if (this.direction == 'LEFT' && this.position[0] > 0) {
			this.prePosition[0] = this.position[0] - 1;
		} else if (this.direction == 'RIGHT' && this.position[0] < 49) {
			this.prePosition[0] = this.position[0] + 1;
		} else {
			this.alive = false;
			notification.redNote('<strong>Joueur ' + this.identifier + ' est mort (collision sur un mur).</strong> <small><i>Position : ' + this.prePosition[0] + ';' + this.prePosition[1] + '</small>');
		}

		for (var i = 0; i < 3; i++) {
			if (this.alive) {
				switch (i) {
					case 0:
						this.checkMapCrash();
						break;
					case 1:
						this.checkPreCrash();
						break;
					case 2:
						this.applyDirection();
						this.move += 1;
						break;
				}
			} else {
				return 0;
			}
		};
	};
	this.applyDirection = function() {
		this.position = this.prePosition;
	};
	this.checkPreCrash = function() {
		samePositionPlayers = [];
		for (var i = game.players.length;i--;) {
			if (this.prePosition[0] == game.players[i].prePosition[0] && this.prePosition[1] == game.players[i].prePosition[1] && this.identifier != game.players[i].identifier && this.alive && game.players[i].alive) {
				samePositionPlayers.push(game.players[i]);
			}
		};
		if (samePositionPlayers.length >= 1) {
			for (var i = samePositionPlayers.length;i--;) {
				samePositionPlayers[i].alive = false;
			};
			this.alive = false;
			notification.redNote('<strong>Mort de ' + (samePositionPlayers.length + 1) + ' joueurs à la même position.');
		}
	};
	this.checkMapCrash = function() {
		mapCase = map.map[this.prePosition[0]][this.prePosition[1]];
		if (mapCase > 0) {
			this.alive = false;
			if (mapCase == this.identifier) {
				notification.redNote('<strong>Joueur ' + this.identifier + ' est mort (collision contre lui-même).</strong> <small><i>Position : ' + this.prePosition[0] + ';' + this.prePosition[1] + '</small>');
			} else {
				notification.redNote('<strong>Joueur ' + this.identifier + ' est mort (collision contre le joueur ' + mapCase + ').</strong> <small><i>Position : ' + this.prePosition[0] + ';' + this.prePosition[1] + '</small>');
			}
		}
	};
}
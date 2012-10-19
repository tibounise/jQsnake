function Map() {
	this.map = Array(50);

	this.makeMap = function() {
		for (var i = this.map.length - 1; i >= 0; i--) {
			this.map[i] = Array(50);
			for (var z = this.map[i].length - 1; z >= 0; z--) {
				this.map[i][z] = 0;
			};
		};
	}

	this.makeDots = function() {
		for (var i = game.players.length - 1; i >= 0; i--) {
			this.map[game.players[i].position[0]][game.players[i].position[1]] = game.players[i].identifier;
		};
	}
}
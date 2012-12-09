function Map() {
	/*--~ Variables ~--*/
	this.map = Array(50);

	/*--~ Functions ~--*/
	this.makeMap = function() {
		for (var i = this.map.length;i--;) {
			this.map[i] = Array(50);
			for (var z = this.map[i].length;z--;) {
				this.map[i][z] = 0;
			};
		};
	}
	this.makeDots = function() {
		for (var i = game.players.length;i--;) {
			this.map[game.players[i].position[0]][game.players[i].position[1]] = game.players[i].identifier;
		};
	}
}
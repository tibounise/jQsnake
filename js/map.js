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
		positions = game.getPositions();
		for (var i = positions.length - 1; i >= 0; i--) {
			positions[i]
		};
	}
}
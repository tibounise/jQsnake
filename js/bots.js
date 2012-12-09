function Bots() {
	/*--~ Functions ~--*/
	this.doStrategy = function (array) {
		switch (array.strategy) {
			case 1:
				return this.strategy1();
				break;
			case 2:
				return this.strategy2(array);
				break;
			case 3:
				return this.strategy3(array);
				break;
		}
	};
	this.int2direction = function(intvar) {
		dirarr = ['UP','DOWN','LEFT','RIGHT'];
		return dirarr[intvar];
	};
	this.strategy1 = function() {
		return this.int2direction(Math.floor(Math.random()*3));
	};
	this.strategy2 = function(array) {
		if (array.position[0] < 49 && array.direction != 'LEFT') {
			return this.int2direction(3);
		} else if (array.position[0] > 0 && array.direction != 'RIGHT') {
			return this.int2direction(2);
		} else if (array.position[1] < 49 && array.direction != 'UP') {
			return this.int2direction(1);
		} else if (array.position[1] > 0 && array.direction != 'DOWN') {
			return this.int2direction(0);
		} else {
			return this.int2direction(Math.floor(Math.random()*3));
		}
	};
	this.strategy3 = function(array) {
		if (array.direction != 'DOWN' && (array.position[1] > 0 || map.map[array.position[0]][array.position[1] + 1] == 0)) {
			return this.int2direction(0);
		} else if (array.direction != 'LEFT' && (array.position[0] < 49 || map.map[array.position[0] - 1][array.position[1]] == 0)) {
			return this.int2direction(3);
		} else if (array.direction != 'UP' && (array.position[1] < 49 || map.map[array.position[0]][array.position[1] - 1] == 0)) {
			return this.int2direction(1);
		} else if (array.direction != 'RIGHT' && (array.position[0] > 0 || map.map[array.position[0] + 1][array.position[1]] == 0)) {
			return this.int2direction(2);
		}
	};
}
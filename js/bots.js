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
		}
	};
	this.int2direction = function(intvar) {
		dirarr = ['UP','DOWN','LEFT','RIGHT'];
		if (intvar >= 0 && intvar < 4) {
			return dirarr[intvar];
		}
		else {
			console.log('Value out of bounds');
		}
	};
	this.strategy1 = function() {
		return this.int2direction(Math.floor(Math.random()*3));
	};
	this.strategy2 = function(array) {
		for (var i = 4 - 1; i >= 0; i--) {
			if (i == 0 && array.position[1] > 0 && array.direction != 'DOWN') {
				return this.int2direction(i);
			} else if (i == 1 && array.position[1] < 49 && array.direction != 'UP') {
				return this.int2direction(i);
			} else if (i == 2 && array.position[0] > 0 && array.direction != 'RIGHT') {
				return this.int2direction(i);
			} else if (i == 3 && array.position[0] < 49 && array.direction != 'LEFT') {
				return this.int2direction(i);
			}
		};
		return this.int2direction(Math.floor(Math.random()*3));
	};
}
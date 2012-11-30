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
		
	};
}
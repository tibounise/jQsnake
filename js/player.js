function Player(identifier,bot,ia,position,direction) {
	/*--~ Variables ~--*/
	this.identifier = identifier;
	this.bot = bot;
	this.ia = ia;
	this.position = position;
	this.prePosition = position;
	this.direction = direction;
	this.alive = true;

	/*--~ Functions ~--*/
	this.meditateDirection = function() {
		if (this.direction == UP && this.position > 0) {
			this.prePosition[1] = this.position[1] - 1;
		}
		else if (this.direction == DOWN && this.position < 49) {
			this.prePosition[1] = this.position[1] + 1;
		}
		else if (this.direction == LEFT && this.position > 0) {
			this.prePosition[0] = this.position[0] - 1;
		}
		else if (this.direction == RIGHT && this.position < 49) {
			this.prePosition[0] = this.position[0] + 1;
		}
		else {
			this.alive = false;
			displayRed('<strong>Joueur ' + this.identifier + ' est mort (collision sur un mur).</strong> <small><i>Position : ' + this.prePosition[0] + ';' + this.prePosition[1] + '</small>');
		}

		if (this.alive) {
			checkCrash();
		}
	};
	this.applyDirection = function() {
		this.position = this.prePosition;
	};
	this.checkCrash = function() {
		
	};
}
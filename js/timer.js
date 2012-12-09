function Timer() {
	/*--~ Variables ~--*/
	this.period = 40;
	this.timer = null;

	/*--~ Functions ~--*/
	this.startTimer = function() {
		this.timer = setInterval(function() {
			game.gameCycle();
		},this.period);
	};
	this.stopTimer = function() {
		clearInterval(this.timer);
		this.timer = null;
	};
}
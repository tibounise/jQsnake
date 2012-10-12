// TIMERS //

function Timer(period) {
	/*--~ Variables ~--*/
	this.period = period;
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
// GAME //

function Game() {
	/*--~ Variables ~--*/
	this.launched = false;
	this.paused = false;

	/*--~ Functions ~--*/
	this.startGame = function() {
		canvas.clearCanvas();
		notification.blueNote('Jeu lancé');
		this.launched = true;
		timer.startTimer();
		$('#pauseModal').on('hidden', function() {
			game.toggleTimer();
		});
	};
	this.toggleGame = function() {
		if (!this.paused) {
			$('#pauseModal').modal('show');
			timer.stopTimer();
			this.paused = true;
		}
		else {
			timer.startTimer();
			this.paused = false;
		}
	};
}
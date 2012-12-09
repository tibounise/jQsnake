function Canvas() {
	
	/*--~ Functions ~--*/
	this.init = function() {
		$('#gameView').delay(350).fadeToggle();
		
		$("#gameCanvas").drawImage({
			source: "img/boot.png",
			x: 0,
			y: 0,
			fromCenter: false
		});
	}
	this.refresh = function() {
		for (var i = game.players.length;i--;) {
			if (game.players[i].alive) {
				this.drawSquare(game.players[i].position[0],game.players[i].position[1],game.players[i].traceColor);
			}
		}
	};
	this.drawSquare = function(x_a,y_a,color) {
		$("#gameCanvas").drawRect({
			fillStyle: color,
			x: x_a*10, y: y_a*10,
			width: 10,
			height: 10,
			fromCenter: false
		});
	};
	this.clearCanvas = function() {
		$('#gameCanvas').clearCanvas();
	};
	this.getPNG = function() {
		return $("#gameCanvas").getCanvasImage('png');
	}
}
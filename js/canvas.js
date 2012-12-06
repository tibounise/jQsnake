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
		// this.clearCanvas();
		for (var i = map.map.length - 1; i >= 0; i--) {
			for (var z = map.map[i].length - 1; z >= 0; z--) {
				switch (map.map[i][z]) {
					case 1:
						this.drawSquare(i,z,'#bbb');
						break;
					case 2:
						this.drawSquare(i,z,'#1a58c7');
						break;
					case 3:
						this.drawSquare(i,z,'#e89630');
						break;
					case 4:
						this.drawSquare(i,z,'#ab4435');
						break;
					case 5:
						this.drawSquare(i,z,'#741f77');
						break;
					case 6:
						this.drawSquare(i,z,'#e945dc');
						break;
				}
			}
		}
	}
	this.newRefresh = function() {
		for (var i = game.players.length - 1; i >= 0; i--) {
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
}
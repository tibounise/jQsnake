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
		map.makeDots();
		this.clearCanvas();
		for (var i = map.map.length - 1; i >= 0; i--) {
			for (var z = map.map[i].length - 1; z >= 0; z--) {
				switch (map.map[i][z]) {
					case 0:
						this.drawSquare(i,z,'#fff');
						break;
					case 1:
						this.drawSquare(i,z,'#bbb');
						break;
					case 2:
						this.drawSquare(i,z,'#214afc');
						break;
					case 3:
						this.drawSquare(i,z,'#00dcc0');
						break;
					case 4:
						this.drawSquare(i,z,'#84ff00');
						break;
				}
			}
		}
	}
	this.drawSquare = function(x_a,y_a,color) {
		$("#gameCanvas").drawRect({
			fillStyle: color,
			x: x_a*10, y: y_a*10,
			width: 10,
			height: 10,
			fromCenter: false
		});
	}
	this.clearCanvas = function() {
		$('#gameCanvas').clearCanvas();
	}
}
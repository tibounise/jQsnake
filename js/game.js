// TIMERS //

function startTimer() {
	timer = setInterval(function() {
		refreshScreen();
	},500); // Refresh the screen every 40 ms
}

function stopTimer() {
	clearInterval(timer);
	timer = null;
}

// REFRESH SCREEN //

function refreshScreen() {
	$("#gameCanvas").clearCanvas();
	for (var i = 49; i > 0; i--) {
		for (var z = 49; z > 0; z--) {
			switch (map[i][z]) {
				case null:
					drawSquare(x_a,y_a,'#fff');
					break;
				case 1:
					drawSquare(x_a,y_a,'#bbb');
					break;
				case 2:
					drawSquare(x_a,y_a,'#214afc');
					break;
				case 3:
					drawSquare(x_a,y_a,'#00dcc0');
					break;
				case 4:
					drawSquare(x_a,y_a,'#84ff00');
					break;
			}
		}
	}
}

// Graphic functions //

function drawSquare(x_a,y_a,color) {
	$("#gameCanvas").drawRect({
		fillStyle: color,
		x: x_a*10, y: y_a*10,
		width: 10,
		height: 10,
		fromCenter: false
	});
}
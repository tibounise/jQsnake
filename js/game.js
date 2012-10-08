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
	makeDirection();
	addDot();
	//sp(map);
	$("#gameCanvas").clearCanvas();
	for (var i = map.length - 1; i >= 0; i--) {
		for (var z = map[i].length - 1; z >= 0; z--) {
			switch (map[i][z]) {
				case 0:
					drawSquare(i,z,'#fff');
					break;
				case 1:
					drawSquare(i,z,'#bbb');
					break;
				case 2:
					drawSquare(i,z,'#214afc');
					break;
				case 3:
					drawSquare(i,z,'#00dcc0');
					break;
				case 4:
					drawSquare(i,z,'#84ff00');
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
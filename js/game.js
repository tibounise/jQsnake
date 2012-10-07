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
	console.log('probe');
}
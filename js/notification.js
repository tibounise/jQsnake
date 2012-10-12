// NOTIFICATION //

function Notification() {
	/*--~ Functions ~--*/
	this.redNote = function(message) {
		$('#gameAlert').html('<div class="alert alert-error">' + message + '</div>' + $('#gameAlert').html());
	};
	this.blueNote = function(message) {
		$('#gameAlert').html('<div class="alert alert-info">' + message + '</div>' + $('#gameAlert').html());
	};
}
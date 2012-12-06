function Conclusion() {
	/*--~ Functions ~--*/
	this.conclusion = function() {
		canvas.refresh();
		$('#conclusionMatchBody').html('TEXT');
		$('#conclusionMatch').modal('show');
	};
	this.makeConclusionText = function() {
		text = 'Scores joueurs : <br />';
		for (var i = game.players.length - 1; i >= 0; i--) {
			text += 'Joueur ' + game.players[i].identifier + ' : ' + game.players[i].move + '<br />';
		};
		return text;
	};
}
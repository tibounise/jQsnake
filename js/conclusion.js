function Conclusion() {
	/*--~ Functions ~--*/
	this.conclusion = function() {
		game.ended = true;
		canvas.refresh();
		$('#conclusionMatchBody').html(this.makeConclusionText());
		$('#conclusionMatch').modal('show');
	};
	this.makeConclusionText = function() {
		text = '<strong>Scores joueurs :</strong> <br />';
		for (var i = game.players.length;i--;) {
			if (game.players[i].alive) {
				text += 'Joueur ' + game.players[i].identifier + ' <strong>[GAGNANT]</strong> : ' + game.players[i].move + '<br />';
			} else {
				text += 'Joueur ' + game.players[i].identifier + ' : ' + game.players[i].move + '<br />';
			}
		};
		text += '<br />Télécharger l\'image du match : <a href="'+ canvas.getPNG() +'" target="_blank">PNG</a>';
		text += '<br /><br /><a href="index.html" class="btn btn-large btn-block btn-warning">Relancer</a>'
		return text;
	};
}
function makeMap() {
	for (var i = map.length - 1; i >= 0; i--) {
		map[i] = Array(50);
		for (var z = map[i].length - 1; z >= 0; z--) {
			map[i][z] = 0;
		};
	};
}

function makeDirection() {
	for (var i = 1; i < 5; i++) {
		if (hp_enabled[i - 1] && !hp_isDead[i - 1]) {
			if (direction_hp[i] == UP && position_hp[i][1] < 50) {
				position_hp[i][1]--;
			}
			else if (direction_hp[i] == DOWN && position_hp[i][1] > 0) {
				position_hp[i][1]++;
			}
			else if (direction_hp[i] == LEFT && position_hp[i][0] > 0) {
				position_hp[i][0]--;
			}
			else if (direction_hp[i] == RIGHT && position_hp[i][0] < 50) {
				position_hp[i][0]++;
			}
			else {
				hp_isDead[i - 1] = true;
				displayRed('<strong>Joueur ' + i + ' est mort (collision sur un mur).</strong> <small><i>Position : '+position_hp[i][0]+';'+position_hp[i][1]+'</small>');
			}
		}
	};
}

function addDot() {
	for (var i = 1; i < 5; i++) {
		if (hp_enabled[i - 1]) {
			map[position_hp[i][0]][position_hp[i][1]] = i;
		}
	}
}
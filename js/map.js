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
			if (direction_hp[i] == UP && position_hp[i][1] > 0) {
				if (!checkCrash(i,UP)) {
					position_hp[i][1]--;
				}
			}
			else if (direction_hp[i] == DOWN && position_hp[i][1] < 49) {
				if (!checkCrash(i,DOWN)) {
					position_hp[i][1]++;
				}
			}
			else if (direction_hp[i] == LEFT && position_hp[i][0] > 0) {
				if (!checkCrash(i,LEFT)) {
					position_hp[i][0]--;
				}
			}
			else if (direction_hp[i] == RIGHT && position_hp[i][0] < 49) {
				if (!checkCrash(i,RIGHT)) {
					position_hp[i][0]++;
				}
			}
			else {
				hp_isDead[i - 1] = true;
				displayRed('<strong>Joueur ' + i + ' est mort (collision sur un mur).</strong> <small><i>Position : '+position_hp[i][0]+';'+position_hp[i][1]+'</small>');
			}
		}
	};
}

function checkCrash(i,direction) {
	result = false;
	switch (direction) {
		case UP:
			y = -1;
			x = 0;
			break;

		case DOWN:
			y = 1;
			x = 0;
			break;

		case LEFT:
			x = -1;
			y = 0;
			break;

		case RIGHT:
			x = 1;
			y = 0;
			break;
	}

	caseMap = map[position_hp[i][0] + x][position_hp[i][1] + y];

	if (!(caseMap == 0)) {
		sp('CHIICH');
		hp_isDead[i - 1] = true;
		result = true;
		if (caseMap == i) {
			displayRed('<strong>Joueur ' + i + ' est mort (collision sur un lui-même).</strong> <small><i>Position : '+position_hp[i][0]+';'+position_hp[i][1]+'</small>');
		}
		else {
			displayRed('<strong>Joueur ' + i + ' est mort (collision sur un autre joueur).</strong> <small><i>Position : '+position_hp[i][0]+';'+position_hp[i][1]+'</small>');
		}
	}
	return result;
}

function addDot() {
	for (var i = 1; i < 5; i++) {
		if (hp_enabled[i - 1] && !hp_isDead[i - 1]) {
			if (map[position_hp[i][0]][position_hp[i][1]] == 0) {
				map[position_hp[i][0]][position_hp[i][1]] = i;
			}
		}
	}
}
function makeMap() {
	map = Array(100);
	for (var i = map.length - 1; i >= 0; i--) {
		map[i] = Array(100);
		for (var z = map[i].length - 1; z >= 0; z--) {
			map[i][z] = null;
		};
	};
}

function makeDirection() {
	for (var i = direction_hp.length - 1; i > 0; i--) {
		if (direction_hp[i] == UP && position_hp[i][1] < 100) {
			position_hp[i][1]++;
		}
		else if (direction_hp[i] == DOWN && position_hp[i][1] > 0) {
			position_hp[i][1]--;
		}
		else if (direction_hp[i] == LEFT && position_hp[i][0] > 0) {
			position_hp[i][0]--;
		}
		else if (direction_hp[i] == RIGHT && position_hp[i][0] < 100) {
			position_hp[i][0]++;
		}
		else {
			sp('crash for '+i);
			sp(position_hp[i]);
			sp(direction_hp);
		}
	};
}

function addDot() {
	for (var i = position_hp.length - 1; i > 0; i--) {
		map[position_hp[i][0]][position_hp[i][1]] = i;
	};
}
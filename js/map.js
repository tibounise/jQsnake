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
		if (direction_hp[i] == UP && position_hp[i][1] < 50) {
			position_hp[i][1]++;
		}
		else if (direction_hp[i] == DOWN && position_hp[i][1] > 0) {
			position_hp[i][1]--;
		}
		else if (direction_hp[i] == LEFT && position_hp[i][0] > 0) {
			position_hp[i][0]--;
		}
		else if (direction_hp[i] == RIGHT && position_hp[i][0] < 50) {
			position_hp[i][0]++;
		}
		else {
			sp('crash for '+i);
		}
	};
}

function addDot() {
	map[position_hp[1][0]][position_hp[1][1]] = 1;
	map[position_hp[2][0]][position_hp[2][1]] = 2;
	map[position_hp[3][0]][position_hp[3][1]] = 3;
	map[position_hp[4][0]][position_hp[4][1]] = 4;
}
function makeMap() {
	/* for (var x_a = 0; x_a < 50; x_a++) {
		for (var y_a = 0; y_a < 50; y_a++) {
			map[x_a][y_a] = 1;
		}
	} */
	map = Array(50);
	for (var i = map.length - 1; i >= 0; i--) {
		map[i] = Array(50);
		for (var z = map[i].length - 1; z >= 0; z--) {
			map[i][z] = 1;
		};
	};
	return map;
}
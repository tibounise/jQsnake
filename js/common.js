function isSomethingTrue(array) {
	var result = false;
	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i] == true) {
			result = true;
		}
	};
	return result;
}
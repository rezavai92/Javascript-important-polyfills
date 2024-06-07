function throttle(callback, delay = 100) {
	let timer;

	return function () {
		if (!timer) {
			callback();
			setTimeout(() => {
				timer = null;
			}, delay);
		}
	};
}

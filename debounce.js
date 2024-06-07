// Debounce

function debounce(callback, delay = 100) {
	let timer;

	return function () {
		if (timer) {
			clearTimeout(timer);
		}
		
		timer = setTimeout(() => {
			callback();
		}, delay);
	};
}

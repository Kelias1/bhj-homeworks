const reveal = document.querySelectorAll('.reveal');
const show = window.innerHeight;

document.addEventListener('scroll', function() {
	reveal.forEach((element) => {
		element.classList.remove('reveal_active');

		if (element.getBoundingClientRect().top < show) {
			element.classList.add('reveal_active');
		}
	});
});
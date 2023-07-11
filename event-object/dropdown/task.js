const openMenu = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const chooseItem = Array.from(document.querySelectorAll('.dropdown__link'));

openMenu.addEventListener('click', () => {
	list.classList.toggle('dropdown__list_active');
});

chooseItem.forEach((item) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		openMenu.textContent = item.textContent;
		list.classList.remove('dropdown__list_active');
	});
});
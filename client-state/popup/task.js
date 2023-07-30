const subsModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if (document.cookie.includes('modalclose') === false) {
	subsModal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
	subsModal.classList.remove('modal_active');
	document.cookie = 'modalclose = true';
});

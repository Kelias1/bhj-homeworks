const form = document.querySelector('.signin');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const logoutBtn = document.getElementById('logout__btn');
const welcome = document.querySelector('.welcome');
const userId = document.getElementById('user_id');

const signIn = () => {
	form.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
};

window.addEventListener('load', () => {
	if (localStorage.loginId) {
		signIn();
		userId.textContent = localStorage.loginId;
	}
});

signinForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let user = new FormData(signinForm);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
	xhr.responseType = 'json';
	xhr.send(user);

	xhr.addEventListener('load', () => {
		let data = xhr.response;
		if (data.success) {
			signIn();
			userId.textContent = data.user_id;
			localStorage.loginId = data.user_id;
		} else {
			alert('неверный логин/пароль!');
			signinForm.reset();
		}
	});
});

logoutBtn.addEventListener('click', () => {
	localStorage.clear();
	welcome.classList.remove('welcome_active');
	form.classList.add('signin_active');
	signinForm.reset();
});

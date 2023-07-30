const editor = document.getElementById('editor');
const button = document.querySelector('.button');

editor.value = localStorage.getItem('test');
editor.addEventListener('input', () => {
	localStorage.setItem('test', editor.value)
});

button.onclick = () => {
	localStorage.removeItem('test');
	editor.value = '';
}
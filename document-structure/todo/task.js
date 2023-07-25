const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const list = document.getElementById('tasks__list');

form.addEventListener('submit', taskAdd);
list.addEventListener('click', taskRemove);

function taskAdd(event) {
	event.preventDefault();
	const taskTitle = input.value;
	const element = document.createElement('div');
	element.className = 'task';
	element.innerHTML = `<div class="task__title">${input.value}</div>
<a href="#" class="task__remove">&times;</a>`;
	list.appendChild(element);
	input.value = '';
	saveTask();
}

function taskRemove(event) {
	event.preventDefault();
	const removeX = event.target;
	if (removeX.classList.contains('task__remove')) {
		let remove = removeX.closest('.task');
		remove.remove();
		saveTask();
	}
}

function saveTask() {
	localStorage.setItem('tasks', list.innerHTML);
}

if (localStorage.getItem('tasks')) {
	list.innerHTML = localStorage.getItem('tasks');
};
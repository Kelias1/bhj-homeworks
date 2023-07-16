const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');
const colorText = document.querySelectorAll('.book__control_color .color');
const backgroundColor = document.querySelectorAll('.book__control_background .color');

for (let size of fontSize) {
	size.onclick = function(event) {
		event.preventDefault();

		if (event.target.dataset.size === 'big') {
			book.classList.add('book_fs-big');
			book.classList.remove('book_fs-small');
		} else if (event.target.dataset.size === 'small') {
			book.classList.add('book_fs-small');
			book.classList.remove('book_fs-big');
		} else {
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		}
		for (let letter of fontSize) {
			letter.classList.remove('font-size_active');
		}
		event.target.classList.add('font-size_active');
	}
}

// ИЗМЕНЕНИЕ ЦВЕТА ТЕКСТА

for (let color of colorText) {
	color.onclick = function(event) {
		event.preventDefault();

		if (event.target.dataset.textColor === 'black') {
			book.classList.add('book_color-black');
			book.classList.remove('book_color-gray');
			book.classList.remove('book_color-whitesmoke');
		} else if (event.target.dataset.textColor === 'gray') {
			book.classList.add('book_color-gray');
			book.classList.remove('book_color-black');
			book.classList.remove('book_color-whitesmoke');
		} else if (event.target.dataset.textColor === 'whitesmoke') {
			book.classList.add('book_color-whitesmoke');
			book.classList.remove('book_color-black');
			book.classList.remove('book_color-gray');
		} else {
			book.classList.remove('book_color-black');
			book.classList.remove('book_color-gray');
			book.classList.remove('book_color-whitesmoke');
		}

		for (let letterColor of colorText) {
			letterColor.classList.remove('color_active');
		}
		event.target.classList.add('color_active');
	}
}

// ИЗМЕНЕНИЕ ЦВЕТА ФОНА

for (let backControl of backgroundColor) {
	backControl.onclick = function(event) {
		event.preventDefault();

		if (event.target.dataset.bgColor === 'black') {
			book.classList.add('book_bg-black');
			book.classList.remove('book_bg-gray');
			book.classList.remove('book_bg-white');
		} else if (event.target.dataset.bgColor === 'gray') {
			book.classList.add('book_bg-gray');
			book.classList.remove('book_bg-black');
			book.classList.remove('book_bg-white');
		} else if (event.target.dataset.bgColor === 'white') {
			book.classList.add('book_bg-white');
			book.classList.remove('book_bg-black');
			book.classList.remove('book_bg-gray');
		} else {
			book.classList.remove('book_bg-black');
			book.classList.remove('book_bg-gray');
			book.classList.remove('bg_color_white');
		}

		for (let back of backgroundColor) {
			back.classList.remove('font-size_active');
		}
		event.target.classList.add('color_active');
	}
}
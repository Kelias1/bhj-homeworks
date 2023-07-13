// ИЗМЕНЕНИЕ РАЗМЕРА ШРИФТА

const book = document.getElementById('book');
const btnControl = document.querySelectorAll('.book__control');
const fontSize = document.querySelectorAll('.font-size');
const textColor = document.querySelectorAll('.book__control_color .color');

for (let control of btnControl) {
	control.onclick = function(event) {
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

// ИЗМЕНЕНИЕ ЦВЕТА ТЕКСТА. НЕ РАБОТАЕТ

// const book = document.getElementById('book');
// const btnControl = document.querySelectorAll('.book__control');
// const fontSize = document.querySelectorAll('.font-size');
// const textColor = document.querySelectorAll('.book__control_color .color');

// for (let control of btnControl) {
// 	control.onclick = function(event) {
// 		event.preventDefault();

// 		if (event.target.dataset.color === 'black') {
// 			book.classList.add('book_color-black');
// 			book.classList.remove('book_color-gray');
// 			book.classList.remove('book_color-whitesmoke');
// 		} else if (event.target.dataset.color === 'gray') {
// 			book.classList.add('book_color-gray');
// 			book.classList.remove('book_color-black');
// 			book.classList.remove('book_color-whitesmoke');
// 		} else if (event.target.dataset.color === 'whitesmoke') {
// 			book.classList.add('book_color-whitesmoke');
// 			book.classList.remove('book_color-black');
// 			book.classList.remove('book_color-gray');
// 		} else {
// 			book.classList.remove('book_color-black');
// 			book.classList.remove('book_color-gray');
// 			book.classList.remove('book_color-whitesmoke');
// 		}

// 		for (let color of textColor) {
// 			color.classList.remove('color_active');
// 		}
// 		event.target.classList.add('color_active');
// 	}
// }

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

// SOLUCION DE OTRAS PERSONAS:

// const book = document.getElementById('book');
// const fontSize = document.querySelectorAll('.font-size');
// const bookTextColor = document.querySelectorAll('.book__control_color .color');
// const bookBackgroundColor = document.querySelectorAll('.book__control_background .color');

// fontSize.forEach(function (fontS) {
// 	fontS.addEventListener('click', function (event) {
// 		event.preventDefault();

// 		fontSize.forEach(function (fontS) {
// 			fontS.classList.remove('font-size_active');
// 		});
// 		this.classList.add('font-size_active');

// 		book.classList.toggle('book_fs-small',
// 			this.classList.contains('font-size_small'));

// 		book.classList.toggle('book_fs-big',
// 			this.classList.contains('font-size_big'));
// 	});
// });

// // ИЗМЕНЕНИЕ ЦВЕТА ТЕКСТА

// bookTextColor.forEach(function (textColor) {
// 	textColor.addEventListener('click', function (event) {
// 		event.preventDefault();

// 		bookTextColor.forEach(function (textColor) {
// 			textColor.classList.remove('color_active');
// 		});
// 		console.log(this);
// 		this.classList.add('color_active');

// 		book.classList.toggle('book_color-black',
// 			this.classList.contains('text_color_black'));

// 		book.classList.toggle('book_color-gray',
// 			this.classList.contains('text_color_gray'));

// 		book.classList.toggle('book_color-whitesmoke',
// 			this.classList.contains('text_color_whitesmoke'));
// 	});
// });

// // ИЗМЕНЕНИЕ ЦВЕТА ФОНА

// bookBackgroundColor.forEach(function (backgroundColor) {
// 	backgroundColor.addEventListener('click', function (event) {
// 		event.preventDefault();

// 		bookBackgroundColor.forEach(function (backgroundColor) {
// 			backgroundColor.classList.remove('font-size_active');
// 		});
// 		this.classList.add('color_active');

// 		book.classList.toggle('bg_color_black',
// 			this.classList.contains('bg_color_black'));

// 		book.classList.toggle('bg_color_gray',
// 			this.classList.contains('bg_color_gray'));

// 		book.classList.toggle('bg_color_white',
// 			this.classList.contains('bg_color_white'));
// 	});
// });

//// TRABAJO DE OTRO:

// const book = document.getElementById('book');

// const fontSize = Array.from(document.querySelector('.book__control_font-size').children);
// const textColor = Array.from(document.querySelector('.book__control_color').children);
// const bgColor = Array.from(document.querySelector('.book__control_background').children);

// fontSize.forEach(item => {
//     item.onclick = function() {
//         book.classList.remove('book_fs-small');
//         book.classList.remove('book_fs-big');
//         document.querySelector('.font-size_active').classList.remove('font-size_active');
//         this.classList.add('font-size_active');
//         this.dataset.size ? book.classList.add(`book_fs-${this.dataset.size}`) : '';
//         return false;
//     }
// })

// textColor.forEach(list => {
//     if(list.classList.contains('color')) {
//         list.onclick = function() {
//             book.style.color=this.dataset.textColor;
//             this.parentElement.querySelector('.color_active').classList.remove('color_active');
//             this.classList.add('color_active');
//             return false;
//         }
//     }
// })

// bgColor.forEach(elem => {
//     if(elem.classList.contains('color')) {
//         elem.onclick = function() {
//             book.style.background=this.dataset.bgColor;
//             this.parentElement.querySelector('.color_active').classList.remove('color_active');
//             this.classList.add('color_active');
//             return false;
//         }
//     }
// })

const image = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');
image.onclick = function() {
    clickCounter.textContent++;
    if (image.width == 200) {
        image.width = 300;
    } else {
        image.width = 200;
    }
}


// #2

// const clickerStatus = document.querySelector('.clicker__status');
// clickerStatus.innerHTML += '<br>Скорость кликов <span id="speed-click">0</span>';
// const speed = document.getElementById('speed-click');
// const clicker = document.getElementById('clicker__counter');

// let clickCount = 0;
// let clickTime = null;

// cookie.onclick = function () {
// 	const currTime = new Date();
// 	clickCount++;
// 	clicker.innerHTML = clickCount;

// 	if (clickCount % 2) {
// 		cookie.width = 300;
// 	} else {
// 		cookie.width = 200;
// 	}

// 	if (clickTime) {
// 		const time = (currTime - clickTime) / 1000;
// 		const clickerSpeed = 1 / time;
// 		speed.innerHTML = clickerSpeed.toFixed(2);
// 	}
// 	clickTime = currTime;
// }
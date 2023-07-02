const timer = document.getElementById('timer');

function countDown() {
	timer.textContent --;
	if (timer.textContent == 0) {
		alert('Вы победили в конкурсе');
		clearInterval(counter);
	}
}

let counter = setInterval(countDown, 1000);

////
// const status = document.getElementById('status');
// const timer = document.getElementById('timer');

// status.innerHTML = 'До окончания конкурса осталось:';

// timer.innerHTML = '<span id="hour">04</span><span id="min">25</span><span id="second">19</span>';


// const hour = document.getElementById('hour');
// const min = document.getElementById('min');
// const second = document.getElementById('second');

// // const currentYear = new Date().getFullYear();
// // // const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
// // const nextYear = new Date(`January 01 ${currentYear + 1}`);

// const currentTime = new Date();
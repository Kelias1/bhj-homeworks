const rotator = document.querySelectorAll('.rotator__case');
let index = 0;

function rotation(element) {
    setInterval(() => {
        element[index].classList.remove('rotator__case_active');
        if (index === element.length - 1) {
            index = 0;
        } else {
            index++;
        }

        element[index].classList.add('rotator__case_active');
        element[index].style.color = element[index].dataset.color;

    }, 1000)
};

rotation(rotator);
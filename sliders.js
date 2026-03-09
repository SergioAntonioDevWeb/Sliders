(function () {
    const sliders = [...document.querySelectorAll('.slider__body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change) {
        const currentElement = document.querySelector('.slider__body--show');
        const currentId = Number(currentElement.dataset.id);

        value = currentId;
        value += change;

        if (value > sliders.length) {
            value = 1;
        } else if (value < 1) {
            value = sliders.length;
        }

        currentElement.classList.remove('slider__body--show');
        sliders[value - 1].classList.add('slider__body--show');
    }
})()
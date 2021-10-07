const container = document.querySelector('.container');
const images = document.querySelectorAll('img');

const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');

const firstImage = document.querySelector('#firstImage');
const lastImage = document.querySelector('#lastImage');

let counter = 0;
let totalImages = images.length;

btn1.addEventListener('click', () => {
    imageSlide('btn2');
})

btn2.addEventListener('click', () => {
    imageSlide('btn1');
})

function imageSlide(drxn) {
    if (drxn == 'btn2') {
        counter++;
        if (counter == totalImages) {
            counter = 0;
        }
    }

    else {
        if (counter == 0)
            counter == totalImages - 1;
        else {
            counter--;
        }
    }
    for (let i = 0; i < totalImages; i++) {
        images[i].classList.remove('main');
    }
    images[counter].classList.add('main');
}


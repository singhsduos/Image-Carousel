const images = document.querySelectorAll('.carouselImage img');

const prev = document.querySelector('#btn-1');
const next = document.querySelector('#btn-2');


var counter = 0;
let totalImages = images.length;



prev.addEventListener('click', () => {
    if (counter >= 1) {
        counter--;
    } else {
        counter = totalImages - 1;
    }
    slideShow(counter);
});


next.addEventListener('click', () => {
    if (counter < totalImages - 1) {
        counter++;
    }
    else {
        counter = 0;
    }
    slideShow(counter);
});


slideShow(counter);

function slideShow(num) {

    for (let image of images) {
        image.style.display = "none";
    }

    images[num].style.display = "block";
}

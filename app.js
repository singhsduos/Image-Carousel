//select all images
const images = document.querySelectorAll('.carouselImage img');
const captions = document.querySelectorAll('.carouselImage h2');

//select both buttons
const prev = document.querySelector('#btn-1');
const next = document.querySelector('#btn-2');

//set the array index '0' of images
var counter = 0;
let totalImages = images.length;
let totalCaptions = captions.length;


// adding click event listener in buttons
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
slideShowAuto();

// function for changing images on clicking buttons and changing images
function slideShow(num) {
     
    // loop for hiding all images initially
    for (let image of images) {
        image.style.display = "none";

    }
    
    // loop for hiding all captions initially
    for (let caption of captions) {
        caption.style.display = "none";

    }

    // displaying particular image and caption of that image
    images[num].style.display = "block";
    captions[num].style.display = "block";

}

// functions for automatic changing images
function slideShowAuto() {
     
    // loop for hiding all images initially
    for (let image of images) {
        image.style.display = "none";

    }

     // loop for hiding all captions initially

    for (let caption of captions) {
        caption.style.display = "none";

    }

    // condition for preventing loop fail
    if (counter < totalImages - 1) {
        counter++;
    }
    else {
        counter = 0;
    }
    
    // displaying particular image and caption of that image
    images[counter].style.display = "block";
    captions[counter].style.display = "block";

    //timer for changing image automatic in 2 seconds
    setTimeout(slideShowAuto, 5000);

}

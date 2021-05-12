const body = document.querySelector('body');

const IMG_NUMBER = 4;

function init() {
    const randomNo = genRandom();
    paintImage(randomNo);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    return number;
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `/wallpaper${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function handleImgLoad() {
    console.log('finished loading');
}

init();
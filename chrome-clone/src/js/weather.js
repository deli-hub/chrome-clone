const COORDS = 'coords';

function init() {
    loadCoords();
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {

    }
}

function handleGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordObj = {
        // lat: lat에서 앞 부분 생략 가능하다(key, value 값이 동일 할 경우)
        lat, 
        lon
    }
    saveCoord(coordObj);
}

function handleGeoError() {
    console.log(`Can't access Geoposition`);
}

function saveCoord(coordObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

init();
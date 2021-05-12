const weather = document.querySelector('.js-weather');

const COORDS = 'coords',
    API_KEY = 'c33cb2eaefc5e1db218bb00362420339'
    ;

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
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.lat, parseCoords.lon);
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
    getWeather(lat, lon);
}

function handleGeoError() {
    console.log(`Can't access Geoposition`);
}

function saveCoord(coordObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temp = json.main.temp;
        const place = json.name;

        weather.innerHTML = `${Math.floor(temp)}° @ ${place}`;
    });
}

init();
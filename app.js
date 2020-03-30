const api = {
    key:  "2a6f0ebcaf98bfd2d534db605127a5f2",
    baseUrl: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchBox.value);
    }
}

 function getResults(query) {
     fetch( `${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}` )
     .then(weather => {
         return weather.json();
     }).then(displayResults);
 }

function displayResults(weather) {
     console.log(weather);
     let city = document.querySelector(' .location .city');
    city.innerText = ` ${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
 }

 function dateBuilder(d) {
     let monthes = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aôut", "Septembre", "Octobre", "novembre", "Decembre"];
 }



const api = {
    key:  " ",
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


    let temp = document.querySelector('.current .temp');
    temp.innerHTML = ` ${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.current .hight-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)} °C /    ${Math.round(weather.main.temp_max)} °C `; 
 }

 function dateBuilder(d) {
     let months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aôut", "Septembre", "Octobre", "novembre", "Decembre"];
     let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

     let day = days[d.getDay()];
     let date = d.getDate();
     let month = months[d.getMonth()];
     let year = d.getFullYear();

     return `${ day} ${date } ${month} ${year} `; 
 }



const API_KEY = 'f6d3c67c6ecf00bd4b5b07e7b1ae2764'
const DEFAULT = '--'

const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');

searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API_KEY}&units=metric&lang=vi`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            cityName.innerHTML = data.name || DEFAULT;
            weatherState.innerHTML = data.weather[0].description || DEFAULT;
            weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT;
            humidity.innerHTML = data.main.humidity || DEFAULT;
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT;
            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT;
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT;

        });
})




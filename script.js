const inputCity = document.getElementById('inputCity');
const weatherForm = document.getElementById('weatherForm');
const apiKey = 'b403381b884b4f41ec1ea9ae638fc68b';

weatherForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let inputValue = inputCity.value;
    let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + inputValue + '&units=metric&APPID=' + apiKey;
    getWeather(apiUrl);
});

function getWeather(apiUrl) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => console.error('Error:', error));
}

function displayWeather(data) {
    inputCity.value = '';
    
    document.getElementById('weather-info').style.display = 'block';
    document.getElementById('city').textContent = data.name ;
    document.getElementById('temperature').textContent = data.main.temp ;
    document.getElementById('pressure').textContent = data.main.pressure ;
    document.getElementById('description').textContent = data.weather[0].description ;
    document.getElementById('humidity').textContent = data.main.humidity ;
    document.getElementById('wind-speed').textContent = data.wind.speed ;
    document.getElementById('wind-direction').textContent = data.wind.deg ;

    const iconCode = data.weather[0].icon;
    const iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

    document.getElementById('weather-icon').src = iconUrl;
}
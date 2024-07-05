const searchBtn = document.getElementById('searchBtn');
const cityNameInput = document.getElementById('cityNameInput');
const weatherIcon = document.getElementById('weatherIcon');
const details = document.querySelector('.details');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const apiKey = '87b1d6f28b85b65ffc813a7a01e6ecaf';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + `&q=${cityName}`);
  const data = await response.json();

  weatherIcon.src = `Images/${data.weather[0].main}.png`;

  temp.innerHTML = Math.round(data.main.temp) + '°C';
  city.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity + '%';
  wind.innerHTML = data.wind.speed + ' km/hr';

  details.style.display = 'flex';
}

function weatherData() {
  if (cityNameInput.value === '') {
    city.innerHTML = 'Enter a city name';
  }

  checkWeather(cityNameInput.value);
}

searchBtn.addEventListener('click', () => {
  weatherData();
});

cityNameInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    weatherData();
  }
});

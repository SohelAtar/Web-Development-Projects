const apiKey = "3db65a5405c48b80f56f07dd491e7b22"; // Replace with your OpenWeatherMap API key



document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    // Reset animation before fetching new data
    document.querySelector('.weather-info').classList.remove('show');


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
            

            // Get and show the weather icon
          const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          const iconElement = document.getElementById('icon');
          iconElement.src = iconUrl;
          iconElement.style.display = 'block';


            document.querySelector('.weather-info').classList.add('show');
        })
        .catch(error => alert('City not found!'));
}

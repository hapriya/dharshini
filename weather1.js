// document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

// function getWeather() {
//     const city = document.getElementById('cityInput').value;
//     const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             if (data.cod === '404') {
//                 document.getElementById('weatherInfo').innerHTML = 'City not found!';
//             } else {
//                 const weatherInfo = `
//                     <h2>${data.name}</h2>
//                     <p>Temperature: ${data.main.temp}°C</p>
//                     <p>Weather: ${data.weather[0].description}</p>
//                     <p>Humidity: ${data.main.humidity}%</p>
//                     <p>Wind Speed: ${data.wind.speed} m/s</p>
//                 `;
//                 document.getElementById('weatherInfo').innerHTML = weatherInfo;
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }
document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'a9b8469ec46dbad0f51f92cd79698970'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(city);
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
            console.log(data);
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = 'City not found!';
        });
});

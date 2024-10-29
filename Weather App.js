// script.js

async function getWeather() {
    const city = document.getElementById("city-input").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert("Error fetching weather data: " + error.message);
    }
}

function displayWeather(data) {
    document.getElementById("city-name").textContent = `Weather in ${data.name}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("description").textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

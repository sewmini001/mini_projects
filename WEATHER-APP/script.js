const apiKey = "dcac71c6675b2fa03fead83d9f8e719f"; // replace with your OpenWeatherMap API key
const btn = document.getElementById("getWeather");
const resultDiv = document.getElementById("weatherResult");

btn.addEventListener("click", () => {
    const city = document.getElementById("city").value;
    if (!city) {
        resultDiv.textContent = "Please enter a city name.";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                resultDiv.textContent = "City not found.";
                return;
            }
            const temp = data.main.temp;
            const condition = data.weather[0].description;
            resultDiv.textContent = `Temperature: ${temp}°C, Condition: ${condition}`;
        })
        .catch(err => {
            resultDiv.textContent = "Error fetching data.";
            console.log(err);
        });
});

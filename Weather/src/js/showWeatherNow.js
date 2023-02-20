export function showWeatherNow(data) {
    document.querySelector('.temperature').textContent = `${Math.round(data.list[0].main.temp - 273)}°С`;
    document.querySelector('.temperature-feel').textContent = `Feels like: ${Math.round(data.list[0].main.feels_like - 273)}°С`;
    document.querySelector('.weather-conditions').textContent = `${data.list[0].weather[0].description}`;
    document.querySelector('.cityName').textContent = `${data.city.name}, ${data.city.country}`;
    document.querySelector('.weather-now__column li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="">`;
}
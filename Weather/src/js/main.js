import {showSelectedCity} from "./showSelectedCity.js";
import {showWeatherNow} from "./showWeatherNow.js";
import {showWeatherWeek} from "./showWeatherWeek.js";

const form = document.querySelector('form');
const API_URL = 'http://api.openweathermap.org';
const API_KEY = 'ffa6a80d4701bb470550e31bbe370ad5';

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const city = document.querySelector('input').value;

    async function fetchDataJSON() {
        const response = await fetch(`${API_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
        return await response.json();
    }

    fetchDataJSON().then(function (data) {
        showSelectedCity(data);
        showWeatherNow(data);
        showWeatherWeek(data, 1, 0);
        showWeatherWeek(data, 2, 8);
        showWeatherWeek(data, 3, 16);
        showWeatherWeek(data, 4, 24);
        showWeatherWeek(data, 5, 32);
    })
})

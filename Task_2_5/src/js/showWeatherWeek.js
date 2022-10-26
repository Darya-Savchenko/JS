function getWeekDay(date) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    return days[date.getDay()];
}

export function showWeatherWeek(data, day, arrNumber) {
    const date = new Date(data.list[arrNumber].dt_txt);
    const dayName = getWeekDay(date);
    document.querySelector(`.day${day} .day__name`).textContent = `${dayName}`;
    document.querySelector(`.day${day} .icon`).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[arrNumber].weather[0].icon}@2x.png" alt="">`;
    document.querySelector(`.day${day} .weather-conditions`).textContent = `${data.list[arrNumber].weather[0].description}`;
    document.querySelector(`.day${day} .temperature__max`).textContent = `${Math.round(data.list[arrNumber].main.temp_max - 273)}°С`;
    document.querySelector(`.day${day} .temperature__min`).textContent = `${Math.round(data.list[arrNumber].main.temp_min - 273)}°С`;
}
export function showSelectedCity(data) {
    document.querySelector('.selected').textContent = `Selected ${data.city.name}, ${data.city.country}`;
}
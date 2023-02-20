export function changeMode() {
    const changeMode = document.querySelector('.button__mode');
    changeMode.addEventListener('click', () => {

        const mode = document.querySelector('#mode');

        if (mode.getAttribute("href") === 'src/css/lightStyle.css') {
            mode.setAttribute('href', 'src/css/darkStyle.css');
            changeMode.textContent = "Light Mode";
        } else {
            mode.setAttribute('href', 'src/css/lightStyle.css');
            changeMode.textContent = "Dark Mode";
        }
    })
}

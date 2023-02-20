import { Validator } from './validator';
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isFormValid = true;
    hideError();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const validator = new Validator();
    if (!formProps.firstName) {
        showError('firstName', 'Please, enter your name.');
        isFormValid = false;
    }
    if (!validator.isEmail(formProps.email)) {
        showError('email', 'Please, enter valid email.');
        isFormValid = false;
    }
    if (!validator.isPassword(formProps.password)) {
        showError('password', `Please, enter a password of 6 to 20 characters, which contains at least
            one number, one uppercase and one lowercase letter`);
        isFormValid = false;
    }
    if (!validator.confirmPassword(formProps.password, formProps.passwordConfirm)) {
        showError('passwordConfirm', 'Passwords do not match.');
        isFormValid = false;
    }
    if (!validator.exceptAge(formProps.age)) {
        showError('age', 'You must be over 16');
        isFormValid = false;
    }
    if (isFormValid) {
        fetch('some url', { method: 'POST', body: JSON.stringify(formProps) });
    }
});
function showError(selector, message) {
    const error = document.querySelector(`[name="${selector}"] + div.error`);
    error.textContent = `${message}`;
}
function hideError() {
    const error = document.querySelectorAll("input + div.error");
    error.forEach(el => el.textContent = "");
}

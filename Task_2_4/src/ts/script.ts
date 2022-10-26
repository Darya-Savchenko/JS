import {Validator} from './validator';
 const form = document.querySelector('form');

form.addEventListener('submit', function (event: any){
    event.preventDefault();
    let isFormValid: boolean = true;
    hideError();

    const formData: any = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const validator = new Validator();

    if (!validator.isRequired(formProps.firstName)) {
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
        alert('Form is valid');
    }
})

function showError(selector: string, message: string): void {
    const error = document.querySelector(`[name="${selector}"] + div.error`);
    error.textContent = `${message}`;
}

function hideError(): void {
    const error = document.querySelectorAll("input + div.error")
    error.forEach(el => el.textContent = "");
}
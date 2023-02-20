export class Validator {
    constructor() {
        this.minAllowedAge = 16;
    }
    isEmail(value) {
        return /\S+@\S+\.\S+/.test(value);
    }
    isPassword(value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value);
    }
    confirmPassword(passwordValue, passwordConfirmValue) {
        return passwordValue === passwordConfirmValue;
    }
    exceptAge(value) {
        return value >= this.minAllowedAge;
    }
}

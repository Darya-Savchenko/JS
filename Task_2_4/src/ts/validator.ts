export class Validator {

    minAllowedAge: number = 16;

    isRequired(value: string): boolean{
        return value !== '';
    }

    isEmail(value: string): boolean {
        return /\S+@\S+\.\S+/.test(value);
    }

    isPassword(value: string):boolean {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value);
    }

    confirmPassword(passwordValue: string, passwordConfirmValue: string): boolean {
        return passwordValue === passwordConfirmValue;
    }

    exceptAge(value: number): boolean {
        return value >= this.minAllowedAge;
    }
}
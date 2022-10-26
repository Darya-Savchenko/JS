export function createForgotPassword() {
    return `<section class="forgotPassword">
            <div class="forgotPassword__container">
                <div class="forgotPassword__title">Forgot Your Password?</div>
                <div class="forgotPassword__text">Please enter your email address below to receive a password reset link.</div>
                <label for="email__forgotPassword">EMAIL ADDRESS</label>
                <input id="email__forgotPassword" class="email__forgotPassword" type="email">
                <button class="submit__forgotPassword">Submit</button>
            </div>
        </section>`
}

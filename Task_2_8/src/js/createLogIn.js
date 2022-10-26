export function createLogIn () {
    return `<section class="logIn">
            <div class="logIn__container">
                <div class="logIn__title">Log In</div>
                <div class="logIn__main">
                    <div class="logIn__section logIn-main-section">
                        <div class="logIn-main-section__title">Welcome</div>
                        <div class="logIn-main-section__text">Please enter your email address and password.</div>
                        <form class="logIn__form">
                            <label for="logIn__email">EMAIL ADDRESS</label>
                            <input name="logIn__email" id="logIn__email" type="email">
                            <label for="logIn__password">PASSWORD</label>
                            <input name="logIn__password" id="logIn__password" type="password">
                            <input type="submit" class="logIn__submit" value="continue">
                        </form>
                        <button class="logIn__forgotPassword">Forgot password</button>
                    </div>
                    <div class=" logIn__section logIn-registration-section">
                        <div class="logIn-registration-section__title">New to After.noon?</div>
                        <div class="logIn-registration-section__text">Register to learn more and start shopping.</div>
                        <button class="logIn-registration-section__button">Register</button>
                    </div>
                </div>
            </div>
        </section>`
}

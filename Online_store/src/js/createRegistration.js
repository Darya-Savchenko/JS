export function createRegistration() {
    return `<section class="createAccount">
            <div class="createAccount__container">
                <div class="createAccount__title">Create New Customer Account</div>
                <form class="createAccount__form">
                    <div class="createAccount__section">
                        <div class="createAccount__section__title">Personal Information</div>
                        <label class="createAccount__label" for="createAccount__FirstName">FIRST NAME</label>
                        <input type="text" id="createAccount__FirstName" class="createAccount__input">
                        <label class="createAccount__label" for="createAccount__LastName">LAST NAME</label>
                        <input type="text" id="createAccount__LastName" class="createAccount__input">
                    </div>
                    <div class="createAccount__section">
                        <div class="createAccount__section__title">Sign-in Information</div>
                        <label class="createAccount__label" for="createAccount__Email">EMAIL</label>
                        <input type="email" id="createAccount__Email" class="createAccount__input">
                        <label class="createAccount__label" for="createAccount__Password">PASSWORD</label>
                        <input type="password" id="createAccount__Password" class="createAccount__input">
                        <label class="createAccount__label" for="createAccount__ConfirmPassword">CONFIRM PASSWORD</label>
                        <input type="password" id="createAccount__ConfirmPassword" class="createAccount__input">
                    </div>
                    <input type="submit" value="Create Account" class="createAccount__submit">
                </form>
            </div>
        </section>`
}
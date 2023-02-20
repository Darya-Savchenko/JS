export function createContact() {
    return `<section class="contact">
            <div class="contact__container">
                <div class="contact__title">Contact</div>
                <div class="contact__main">
                    <div class="contact__section">
                        <div class="contact__section__title">Customer Service</div>
                        <div class="contact__section__text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus, arcu et rutrum
                                finibus,
                                ex quam bibendum felis, ut pretium mauris libero sed tellus. Maecenas pellentesque in
                                dolor
                                sit amet euismod. Nam at accumsan quam. Etiam sagittis neque justo, a facilisis nibh
                                aliquet
                                eu. Phasellus posuere, augue eu tincidunt elementum</p>
                            <p>Tel: 123-456-7890</p>
                            <p>Email: info@my-domain.com</p>
                        </div>
                    </div>
                    <div class="contact__section section__form">
                        <form class="contact__form" action="#" method="post" enctype="multipart/form-data">
                            <div class="contact__form__row">
                                <div class="input__container">
                                    <label for="firstName">*First Name</label>
                                    <input type="text" name="firstName" id="firstName" required>
                                </div>
                                <div class="input__container">
                                    <label for="LastName">Last Name</label>
                                    <input type="text" name="lastName" id="lastName">
                                </div>
                            </div>
                            <div class="contact__form__row">
                                <div class="input__container">
                                    <label for="email">*Email</label>
                                    <input type="email" name="email" id="email">
                                </div>
                                <div class="input__container">
                                    <label for="phoneNumber">Phone Number</label>
                                    <input type="tel" name="phoneNumber" id="phoneNumber">
                                </div>
                            </div>
                            <label for="textarea">*Type your message here...</label>
                            <textarea id="textarea" required></textarea>
                            <input class="form__submit" type="submit">
                        </form>
                    </div>
                </div>
            </div>
        </section>`
}

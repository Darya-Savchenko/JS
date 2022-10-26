import {createShopNow} from "./createShopNow.js";
import {createSections} from "./createSections.js";
import {createBrands} from "./createBrands.js";
import {createAboutUs} from "./createAboutUs.js";
import {itemsCategory} from "./itemsCategory.js";
import {createCategory} from "./createCategory.js";
import {createShippingPolicy} from "./createShippingPolicy.js";
import {createStorePolicy} from "./createStorePolicy.js";
import {createContact} from "./createContact.js";
import {createLogIn} from "./createLogIn.js";
import {createForgotPassword} from "./createForgotPassword.js";
import {createRegistration} from "./createRegistration.js";
import {createShopAll} from "./createShopAll.js";
import {sectionBestseller} from "./sectionBestseller.js";
import {sectionNew} from "./sectionNew.js";
import {sectionSale} from "./sectionSale.js";
import {createShoppingCard, onShoppingCard, shoppingItems} from "./createShoppingCard.js";

export function mainPage() {
    let renderPage = createShopNow();
    renderPage += createShoppingCard();
    renderPage += createSections();
    renderPage += createCategory('Bestsellers');
    renderPage += createBrands();
    renderPage += createAboutUs();

    document.querySelector('main').innerHTML = renderPage;
    sectionBestseller();

    document.querySelector('.header__label').addEventListener('click', mainPage);

    document.querySelectorAll('.button-furniture').forEach(el => el.addEventListener('click', () => {
        let innerHTML = createShoppingCard();
        innerHTML += createCategory('Furniture');
        document.querySelector('.main').innerHTML = innerHTML
        itemsCategory('furniture');
        onShoppingCard();
        shoppingItems();
    }))

    document.querySelectorAll('.button-lighting').forEach(el => el.addEventListener('click', () => {
        let innerHTML = createShoppingCard();
        innerHTML += createCategory('Lighting');
        document.querySelector('.main').innerHTML = innerHTML
        itemsCategory('lighting');
        onShoppingCard();
        shoppingItems();
    }))

    document.querySelectorAll('.button-rugs').forEach(el => el.addEventListener('click', () => {
        let innerHTML = createShoppingCard();
        innerHTML += createCategory('Rugs');
        document.querySelector('.main').innerHTML = innerHTML
        itemsCategory('rugs');
        onShoppingCard();
        shoppingItems();
    }))

    document.querySelector('.button-new').addEventListener('click', () => {
        let innerHTML = createShoppingCard();
        innerHTML += createCategory('Rugs');
        document.querySelector('.main').innerHTML = innerHTML
        sectionNew();
        onShoppingCard();
        shoppingItems();
    })

    const buttonsSales = document.querySelectorAll('.button-sales');
    buttonsSales.forEach(el => el.addEventListener('click', () => {
        let innerHTML = createShoppingCard();
        innerHTML += createCategory('Sale');
        document.querySelector('.main').innerHTML = innerHTML
        sectionSale();
        onShoppingCard();
        shoppingItems();
    }))

    document.querySelectorAll('.button-aboutUs').forEach(el => el.addEventListener('click',
        () => mainPage()));

    document.querySelector('.button-brands').addEventListener('click', () => mainPage())

    document.querySelector('.button-shippingPolicy').addEventListener('click', () => {
        let innerHTML = createShippingPolicy();
        innerHTML += createShoppingCard();
        document.querySelector(".main").innerHTML = innerHTML;

        onShoppingCard();
        shoppingItems();
    })
    document.querySelector('.button-storePolicy').addEventListener('click', () => {
        let innerHTML = createStorePolicy();
        innerHTML += createShoppingCard();
        document.querySelector(".main").innerHTML = innerHTML;

        onShoppingCard();
        shoppingItems();
    })

    document.querySelector('.button-payment').addEventListener('click', () => {
        let innerHTML = createStorePolicy();
        innerHTML += createShoppingCard();
        document.querySelector(".main").innerHTML = innerHTML;

        onShoppingCard();
        shoppingItems();
    })

    document.querySelectorAll('.button-contact').forEach(el => el.addEventListener('click',
        () => document.querySelector(".main").innerHTML = createContact()
    ))

    document.querySelector('.header__logIn').addEventListener('click', () => {
        document.querySelector(".main").innerHTML = createLogIn();

        document.querySelector('.logIn__forgotPassword').addEventListener('click',
            () => document.querySelector(".main").innerHTML = createForgotPassword())

        document.querySelector('.logIn-registration-section__button').addEventListener('click',
            () => document.querySelector(".main").innerHTML = createRegistration())
    })
    onShoppingCard();
    shoppingItems();
    createShopAll();
}

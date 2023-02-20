import {createItemPage} from "./createItemPage.js";

export function createShoppingCard() {
    return `<div class="shoppingCard invisible">
        <div class="shoppingCard__container">
            <div class="shoppingCard__title">Shopping Card</div>
            <div class="shoppingCard__items">Shopping Card is empty</div>
            <div class="shoppingCard__bottom">
                <div class="shoppingCard__totalCount">Total: 0$</div>
                 <div class="shoppingCard__buttons">
                    <button class="shoppingCard__continue shoppingCard__button">Continue shopping</button>
                    <button class="shoppingCard__close shoppingCard__button">Pay for the purchase</button>
                </div>
            </div>
        </div>
    </div>`
}

export function createShoppingCardItem(data) {
    return `<div class="shoppingCard__item" data-path="${data.sku}">
        <div class="shoppingCard__item__img"><img src="${data.src}"></div>
        <div class="shoppingCard__item__info">
            <div class="shoppingCard__item__title">${data.title}</div>
            <div class="shoppingCard__item__quantity">Quantity: ${data.quantity}</div>
            <div class="shoppingCard__item__price">Price: ${data.price*data.quantity}$</div>
            <button class="shoppingCard__item__remove">Remove Item</button>
        </div>
    </div>`
}

export function onShoppingCard() {
    document.querySelector('.header__basket').addEventListener('click', () => {
        document.querySelector('.shoppingCard').classList.remove('invisible');
        document.querySelector('.shoppingCard__continue').addEventListener('click', () => {
            document.querySelector('.shoppingCard').classList.add('invisible');
        })
    })
}
export function shoppingItems(){
    const shoppingCardItems = JSON.parse(localStorage.getItem('shoppingCard'));
    let innerHTML = '';
    let totalCount = 0;

    for (let i = 0; i < shoppingCardItems.length; i++) {
        innerHTML += createShoppingCardItem(shoppingCardItems[i]);
    }
    for (let i = 0; i < shoppingCardItems.length; i++) {
        totalCount += shoppingCardItems[i].quantity * shoppingCardItems[i].price;
    }
    document.querySelector('.shoppingCard__totalCount').innerHTML = `Total: ${totalCount}$`
    document.querySelector('.shoppingCard__items').innerHTML = innerHTML;
    document.querySelectorAll('.shoppingCard__item__remove').forEach(el => el.addEventListener('click', (e) => {
            const sku = e.target.closest('.shoppingCard__item').dataset.path;
            const currentShoppingCardItems = shoppingCardItems.filter(el => el.sku != sku);
            localStorage.setItem('shoppingCard', JSON.stringify(currentShoppingCardItems));
            shoppingItems();
        })
    )
    createItemPage(shoppingCardItems);
}



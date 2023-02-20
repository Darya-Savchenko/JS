import {createShoppingCard, onShoppingCard, shoppingItems} from "./createShoppingCard.js";

function itemPage(data) {
    return `<section class="itemPage">
            <div class="itemPage__container">
                <div class="item__column">
                    <div class="item__img">
                        <img src="${data.images.src1}">
                    </div>
                </div>
                <div class="item__column ">
                    <div class="item__scu">${data.sku}</div>
                    <div class="item__name">${data.title}</div>
                    <div class="item__price">${data.price}$</div>
                    <div class="item__description">${data.info}</div>
                    <label for="item__quantity" class="item__quantity__label">Quantity</label>
                    <input type="number" class="item__quantity" min="1" id="item__quantity" value="1">
                    <button class="item__add">Add too card</button>
                </div>
            </div>
        </section>`
}

export function createItemPage(data) {
    const item = document.querySelectorAll('.item');
    item.forEach(el => el.addEventListener('click', (e) => {
        const sku = e.target.closest('.item').dataset.path;
        const currentItem = data.filter(product => product.sku === sku);
        let innerHTML = createShoppingCard();
        innerHTML += itemPage(currentItem[0]);
        document.querySelector('.main').innerHTML = innerHTML;

        onShoppingCard();
        shoppingItems();

        document.querySelector('.item__add').addEventListener('click', () => {
            let shoppingCard = [];

            if (localStorage.getItem('shoppingCard')) {
                const item = JSON.parse(localStorage.getItem('shoppingCard'));
                shoppingCard.push(...item);
            }
            shoppingCard.unshift({
                sku: currentItem[0].sku, title: currentItem[0].title, src: currentItem[0].images.src1,
                price: currentItem[0].price, quantity: document.querySelector('.item__quantity').value
            });
            localStorage.setItem('shoppingCard', JSON.stringify(shoppingCard));

            shoppingItems();

            document.querySelector('.shoppingCard').classList.remove('invisible');
            document.querySelector('.shoppingCard__continue').addEventListener('click', () => {
                document.querySelector('.shoppingCard').classList.add('invisible');
            })
        })
    }))
}

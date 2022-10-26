import {createAllItems} from "./createAllItems.js";
import {filterItems} from "./filterItems.js";
import {createShoppingCard, onShoppingCard, shoppingItems} from "./createShoppingCard.js";

function shopAll() {
    return `<div class="shopAll">
        <div class="shopAll__container">
            <div class="shopAll__filter">
                <div class="filter">
            <div class="filter__container">
                <div class="filter__title">Filter by:</div>
                <div class="filter__category">
                    <button class="filter__all">All</button>
                    <button class="filter__furniture">Furniture</button>
                    <button class="filter__lighting">Lighting</button>
                    <button class="filter__rugs">Rug</button>
                    <button class="filter__sale">Sale</button>
                    <button class="filter__new">New</button>
                    <button class="filter__bestseller">Bestseller</button>
                </div>
                <div class="filter__price">
                    <div class="filter__price__range" id="slider"></div>
                    <div class="range-value__container">
                        <label class="range__value__label">
                            <span>from</span>
                            <input type="number" class="input-0" min="0" max="100" disabled>
                        </label>
                        <label class="range__value__label">
                            <span>before</span>
                            <input type="number" class="input-1" min="0" max="100" disabled>
                        </label>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div class="section__container"></div>
        </div>
    </div>`
}

export function createShopAll() {
    const buttonShopAll = document.querySelectorAll('.button-shopAll');
    buttonShopAll.forEach(el => el.addEventListener('click', () => {

        let innerHTML = shopAll();
        innerHTML += createShoppingCard();
        document.querySelector('.main').innerHTML = innerHTML;

        createAllItems();
        filterItems();
        onShoppingCard();
        shoppingItems();
    }))
}

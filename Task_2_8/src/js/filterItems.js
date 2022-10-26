import noUiSlider from 'nouislider';
import {itemsCategory} from "./itemsCategory.js";
import {sectionSale} from "./sectionSale.js";
import {sectionNew} from "./sectionNew.js";
import {createAllItems} from "./createAllItems.js";
import {sectionBestseller} from "./sectionBestseller.js";
import {createItem} from "./createItem.js";
import {createItemPage} from "./createItemPage.js";
import {itemHover} from "./itemHover.js";

export function filterItems() {

    document.querySelector('.filter__furniture').addEventListener('click', () => itemsCategory('furniture'));
    document.querySelector('.filter__lighting').addEventListener('click', () => itemsCategory('lighting'));
    document.querySelector('.filter__rugs').addEventListener('click', () => itemsCategory('rugs'));
    document.querySelector('.filter__sale').addEventListener('click', () => sectionSale());
    document.querySelector('.filter__new').addEventListener('click', () => sectionNew());
    document.querySelector('.filter__bestseller').addEventListener('click', () => sectionBestseller());
    document.querySelector('.filter__all').addEventListener('click', () => createAllItems());

    const rangeSlider = document.getElementById('slider');

    noUiSlider.create(rangeSlider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    const input0 = document.querySelector('.input-0');
    const input1 = document.querySelector('.input-1');
    const inputs = [input0, input1]

    rangeSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    })
}

export function filterPrice(data){
    const input0 = document.querySelector('.input-0');
    const input1 = document.querySelector('.input-1');

    const range = document.querySelectorAll('.noUi-touch-area');
    range.forEach(el => el.addEventListener('click', () => {
        const productsFiltered = data.filter(el => el.price >= input0.value && el.price <= input1.value);

        let innerHTML = '';
        for (let i = 0; i < productsFiltered.length; i++) {
            innerHTML += createItem(productsFiltered[i]);
        }

        const div = document.createElement('div');
        div.className = 'items__container';
        document.querySelector('.section__container').append(div);
        document.querySelector('.items__container').innerHTML = innerHTML;

        createItemPage(data);
        itemHover(data)
    }))
}

import {createItem} from "./createItem.js";
import {filterPrice} from "./filterItems.js";
import {createItemPage} from "./createItemPage.js";
import {itemHover} from "./itemHover.js";

export function createAllItems() {
    async function fetchDataJSON() {
        const response = await fetch('http://localhost:5173/src/api/products.json');
        return await response.json();
    }

    fetchDataJSON().then(function (data) {
        const div = document.createElement('div');
        div.className = 'items__container';
        document.querySelector('.section__container').append(div);
        document.querySelector('.items__container').innerHTML = data.map(el => createItem(el));

        createItemPage(data);
        filterPrice(data);
        itemHover(data);
    })
}

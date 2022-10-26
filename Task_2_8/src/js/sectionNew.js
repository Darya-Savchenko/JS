import {createItem} from "./createItem.js";
import {createItemPage} from "./createItemPage.js";
import {filterPrice} from "./filterItems.js";
import {itemHover} from "./itemHover.js";

export function sectionNew() {
    async function fetchDataJSON() {
        const response = await fetch(`http://localhost:5173/src/api/products.json`);
        return await response.json();
    }

    fetchDataJSON().then(function (data) {
        const sectionProducts = data.filter(product => product.new === true);

        let innerHTML = '';
        for (let i = 0; i < sectionProducts.length; i++) {
            innerHTML += createItem(sectionProducts[i]);
        }

        const div = document.createElement('div');
        div.className = 'items__container';
        document.querySelector('.section__container').append(div);
        document.querySelector('.items__container').innerHTML = innerHTML;

        createItemPage(data);
        filterPrice(sectionProducts);
        itemHover(sectionProducts);
    })
}

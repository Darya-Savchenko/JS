'use strict'
import config from "./config";

window.onload = function () {
    const container = document.querySelector(".menu__items__container");
    const innerHTML = config.map(el => createMenuItem(el));
    container.innerHTML = innerHTML.join('');

    const buttons = document.querySelectorAll('.button__items button');
    const buttonAll = document.querySelector(".button__all");

    buttons.forEach(el => el.addEventListener("click", onButtonClick));
    buttonAll.addEventListener("click", onButtonAllClick);

    function onButtonClick(event) {
        const activeElement = event.target;
        const type = activeElement.dataset.item;
        const items = config.filter(el => el.type === type);
        const innerHTML = items.map(el => createMenuItem(el));
        container.innerHTML = innerHTML.join('');
    }

    function onButtonAllClick(event) {
        const innerHTML = config.map(el => createMenuItem(el));
        container.innerHTML = innerHTML.join('');
    }

    function createMenuItem(config) {
        return `<div class="${config.type}">
                <div class="menu__item">
                    <div class="item__photo"><img src="${config.imgUrl}" alt="${config.name}" class="photo"></div>
                    <div class="item__content">
                        <div class="item__title">
                            <h2 class="item__name">${config.name}</h2>
                            <div class="item__price">$${config.price}</div>
                        </div>
                        <div class="item__description">${config.description}
                        </div>
                    </div>
                </div>
            </div>`
    }
};
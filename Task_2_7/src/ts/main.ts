import {changeMode} from "./changeMode";
import {createItem} from "./createItem";
import {createItems} from "./createItems";
import {renderPageAll} from "./renderPageAll";

window.onload = function () {
    renderPageAll();
}

changeMode();

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const country = document.querySelector('input').value;

    async function fetchDataJSON() {
        const response = await fetch(`https://restcountries.com/v2/name/${country}`);
        return await response.json();
    }

    fetchDataJSON().then(function (data) {
        const countryContainer = document.querySelector('.countries__container');
        countryContainer.innerHTML = createItem(data[0]);
    })

    form.reset();
})

const searchRegion = document.querySelector('.searchRegion');
searchRegion.addEventListener('click', () => {

    const region: string = searchRegion.value;

    if (region === 'Filter by region') {
        renderPageAll();
    } else {
        async function fetchDataJSON() {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            return await response.json();
        }

        fetchDataJSON().then(function (data) {
            let innerHTML: string = '';

            for (let i: number = 0; i < data.length; i++) {
                innerHTML += createItems(data[i]);
            }

            const countryContainer = document.querySelector('.countries__container');
            countryContainer.innerHTML = innerHTML;
        })
    }
})

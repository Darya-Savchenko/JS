import {createItems} from "./createItems";

export function renderPageAll() {
    async function fetchDataJSON() {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        return await response.json();
    }

    fetchDataJSON().then(function (data) {
        let innerHTML: string = '';

        for (let i: number = 0; i < 30; i++) {
            innerHTML += createItems(data[i]);
        }

        const countryContainer = document.querySelector('.countries__container');
        countryContainer.innerHTML = innerHTML;
    })
}

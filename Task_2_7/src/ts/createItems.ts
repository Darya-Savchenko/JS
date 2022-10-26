export function createItems(data: Array) {
    return `<div class="country__item">
            <div class="country__photo"><img src="${data.flags.png}" alt=""></div>
            <h2 class="country__name">${data.name.common}</h2>
            <div class="country__population country__info"><span>Population:</span> ${data.population}</div>
            <div class="country__region country__info"><span>Region:</span> ${data.region}</div>
            <div class="country__capital country__info"><span>Capital:</span> ${data.capital}</div>
          </div>`
}

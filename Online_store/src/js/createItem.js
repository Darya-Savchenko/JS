export function createItem(data){
    return `<div class="item hover" data-path="${data.sku}">
            <img src="${data.images.src1}" class="item__image">
            <div class="item__title">${data.title}</div>
            <div class="item__price">${data.price}$</div>
        </div>`
}

export function itemHover(data) {
    document.querySelectorAll('.hover').forEach(el => el.addEventListener("mouseover",(e) => {
        const sku = e.target.closest(".hover").dataset.path;
        const currentItem = data.filter(product => product.sku === sku);
        e.target.closest(".item__image").src = currentItem[0].images.src2;
    }))
    document.querySelectorAll('.hover').forEach(el => el.addEventListener("mouseout",(e) => {
        const sku = e.target.closest(".hover").dataset.path;
        const currentItem = data.filter(product => product.sku=== sku);
        e.target.closest(".item__image").src = currentItem[0].images.src1;
    }))
}
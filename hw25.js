function showCategories() {
    const container = document.querySelector(`.categories`);

    for (let i = 0; i < data.length; i++) {
        const el = document.createElement(`div`);
        el.innerHTML = data[i].name;

        el.setAttribute(`data-category`, i);
        el.addEventListener(`click`, showProductsHandler);
        container.appendChild(el);
    };
}
function showProductsHandler(event) {
    const container = document.querySelector(`.products`);
    container.innerHTML = ``;
    const el = event.target;
    const categoryIndex = el.getAttribute(`data-category`);

    const categoryProducts = data[categoryIndex].products;

    for (let i = 0; i < categoryProducts.length; i++) {
        const el = document.createElement(`div`);
        el.innerHTML = categoryProducts[i].name;
        el.setAttribute(`data-category`, categoryIndex);
        el.setAttribute(`data-product`, i);
        el.addEventListener(`click`, showDetailsHandler);
        container.appendChild(el);

    }
}
function showDetailsHandler(event) {
    const container = document.querySelector(`.details`);
    container.innerHTML = ``;
    const el = event.target;
    var categoryIndex = el.getAttribute(`data-category`)
    var productIndex = el.getAttribute(`data-product`);

    const categoryProducts = data[categoryIndex].products;
    let productsDetails = data[categoryIndex].products[productIndex];

    for (let j = 0; j < data[categoryIndex].length; j++) {
        console.log(data[categoryIndex]);
        for (let i = 0; i < data[categoryIndex].products[productIndex]; i++) {
            const el = document.createElement(`div`);

            el.innerHTML = data[j].products[i];
            console.log(data[j].products[i]);
            el.setAttribute(`data-category`, categoryIndex);
            el.setAttribute(`data-product`, productIndex);
            el.setAttribute(`data-details`, i, j)
        }
        container.appendChild(el);
    }
}

showCategories();
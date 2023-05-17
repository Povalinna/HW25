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
    
    const categoryIndex = event.target.getAttribute(`data-category`); 
    const productIndex = event.target.getAttribute(`data-product`); 
     const productsDetails = data[categoryIndex].products[productIndex]; 
   
    const el = document.createElement(`div`);
     el.setAttribute(`id`,`prodDet`);
     el.innerHTML = productsDetails.name;
        const elem = document.createElement(`div`);
        elem.setAttribute(`id`,`prodPrice`);
        elem.innerHTML = productsDetails.price;
           container.appendChild(el); 
           container.appendChild(elem);
     const btn = document.createElement(`button`); 
        btn.innerHTML = "купити";
        btn.setAttribute(`id`,`btn`)
         container.appendChild(btn);
             btn.onclick = function(){
             this.style.color = `red`;
             this.innerHTML ="товар куплений";
                 setTimeout(() => {
                 document.getElementById('prodDet').style.display = `none`;
                 document.getElementById('prodPrice').style.display = `none`;
                 document.getElementById(`btn`).style.display=`none`;
                 showProductsHandler();
                 document.getElementById(`catProd`).style.display=`none`},2000);}
    }

showCategories();

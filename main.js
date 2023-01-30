let shop = document.getElementById("shop");

let busket = JSON.parse(localStorage.getItem("Item")) || [];


let generateshop = () => {
    return shop.innerHTML = shopItemsData.map((z) => {
        let { id, name, price, desec, img } = z;
        let search = busket.find((y) => y.id === id) || [];
        return `
        <div id="main_item_${id}" class="item">
        <img width="200" height="260" src=${img} alt="">
        <div class="detels">
            <h3>${name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis!</p>
            <div class="price">
                <h2>$${price}</h2>
                <div class="quantity">
                    <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                    <div id=${id}  class="quantity_number">${search.item === undefined ? 0 : search.item}</div>
                    <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
    </div>
        
        `
    }).join("")
};
generateshop();


let increment = (id) => {
    let secletItem = id;
    let search = busket.find((x) => x.id === secletItem.id)
    if (search === undefined) {
        busket.push({
            id: secletItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    update(secletItem.id);
    // console.log(busket)
    localStorage.setItem("Item", JSON.stringify(busket))



};

let decrement = (id) => {
    let secletItem = id;
    let search = busket.find((x) => x.id === secletItem.id)
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(secletItem.id);
    busket = busket.filter((x) => x.item !== 0)
    // console.log(busket)
    localStorage.setItem("Item", JSON.stringify(busket))


}


let update = (id) => {
    let search = busket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculetor();

}




let calculetor = () => {
    let cartIcon = document.getElementById("countShow");
    cartIcon.innerHTML = busket.map((x) => x.item).reduce((x, y) => x + y, 0)

}
calculetor();



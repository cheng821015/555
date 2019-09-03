window.onload = loadMenu;

var buts = document.getElementById('areaId');
var box = document.getElementById('MenuContent');
var foods = food.length;

function loadMenu() {
    var select = '牛肉';
    var str = '';

    for (var i = 0; i < foods; i++) {
        if (select == food[i].category) {
            str += `<div  class="foodCard col-12 col-md-6 col-lg-4">
                <img src="image/${food[i].img}.jpg">
                <h2 id="foodName">${food[i].name}</h2>
                <p id="price">價格:${food[i].price}元</p>
                </div>`
        }
    }
    box.innerHTML = str;

}

function changeing(e) {
    let select = e.target.value;
    let str = '';
    // let All = '0';

    for (let i = 0; i < foods; i++) {
        if (select == food[i].category) {
            str += `<div  class="foodCard col-12 col-md-6 col-lg-4">
                    <img src="image/${food[i].img}.jpg">
                    <h2 id="foodName">${food[i].name}</h2>
                    <p id="price">價格:${food[i].price}</p>
                    </div>`
        }
    }
    box.innerHTML = str;
}
buts.addEventListener('change', changeing, false);
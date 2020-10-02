
function renderRestaurants(restaurants) {
    var food = restaurants.map(function(element){
        var price = element.priceRating
        console.log(element.priceRating)
        var restaurant = `<div class="text-center mt-5">
                <div style=color:black;background-color:#D3D3D3;width:180px;height:130px;border-radius:10px;text-align:left>
                    <h3>${element.name}</h3>
                    <p>${element.type}</p>
                    <div id=restaurantFunc>
                        ${priceFinder(price)}
                    </div>
                </div>
            </div>`
            return restaurant
    })
    return food.join(' ')
}
function priceFinder(price){
    if(price == 1){
        return "$"
    }else if(price == 2 ){
        return "$$"
    }else if(price == 3 ){
        return "$$$"
    }else if(price == 4 ){
        return "$$$$"
    }else if(price == 5 ){
        return "$$$$$"
    }
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}
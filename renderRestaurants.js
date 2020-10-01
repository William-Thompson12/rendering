
function renderRestaurants(restaurants) {
    var food = restaurants.map(function(element){
        var price = restaurants.priceRating

        function priceFinder(price) {
            for(let i = 0; i <= price; i++) {
                var calc = ' '
                calc += '$'
                console.log(calc)
                return calc
            }
        }
        var restaurant = `<div class="text-center mt-5">
                <div style=color:black;background-color:#D3D3D3;width:200px;height:80px;border-radius:10px;text-align:left>
                <h3>${element.name}</h3>
                <p>${element.type}</p>
                ${console.log(priceFinder(price))}
                ${priceFinder(price)}
                </div>
            </div>`
            return restaurant
    })
    return food.join(' ')
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
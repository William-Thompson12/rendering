
function renderPokerHand(pokerHand) {
    var cards = pokerHand.map(function(card) {
        let value = card.value;
        let suit = card.suit;
        
        return`<div class="poker-hand style="width:100px;height:auto;""
        <img src="cards/${value}${suit}.png">
        </div>`
    })
    return cards.join(' ');
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}
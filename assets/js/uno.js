let cards = [];
let player = [];
let cpu = [];
let deck = [];
let table;

// Create cards for four color
for(let i =0; i<= 9; i++){

    cards.push({color: 'green', number: i});
    cards.push({color: 'yellow', number: i});
    cards.push({color: 'red', number: i});
    cards.push({color: 'blue', number: i});

}

// Cards sort
// cards shuffle
cards.sort(function () {
    return Math.random() - 0.5
});

// Deal cards player and cpu
for(let i = 1 ; i <= 7; i++){

    player.push(cards.shift());
    cpu.push(cards.shift());
}

// table card
table = cards.shift();


deck = cards;

let turn = 1;

// create card for dom
function createCardHtml(color,number) {
    
    return `<div class="card ${color}" data-color="${color}" data-number="${number}">${number}</div>`
}

// variable
const cpuContainer = document.querySelector('.cpu');
const tableontainer = document.querySelector('.table');
const playerContainer = document.querySelector('.player');
const deckContainer = document.querySelector('.deck');

// player cards dom
for(let card of player){

    playerContainer.innerHTML += createCardHtml(card.color, card.number);

}

// cpu cards dom
for(let card of cpu){

  cpuContainer.innerHTML += createCardHtml(card.color, card.number);

}
// deck cards dom
for(let card of deck){

    deckContainer.innerHTML += createCardHtml(card.color, card.number);

}

// table card dom
tableontainer.innerHTML += createCardHtml(table.color,table.number);


let cardElements = document.querySelectorAll('.card');

for ( let cardElement of cardElements){
    cardElement.addEventListener('click',playCard)
}

function isCardPlayable(cardColor,cardNumber) {
    
    if(table.color === cardColor || table.number === cardNumber){
    return true;

    }
    return false
}

// play Card
function playCard() {
    
    if(isCardPlayable(this.dataset.color, this.dataset.number)){
        tableontainer.appendChild(this);
        table.color = this.dataset.color;
        table.number = this.dataset.number
    }
}
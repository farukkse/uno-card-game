let cards = [];
let player = [];
let cpu = [];
let deck = [];
let table;

// Create cards for four color
for(let i =0; i<= 9; i++){

    cards.push({color: 'green', number: i.toString()});
    cards.push({color: 'yellow', number: i.toString()});
    cards.push({color: 'red', number: i.toString()});
    cards.push({color: 'blue', number: i.toString() });

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

function changeTurn() {
    if (turn === 1) {
        turn = 2;
        
    }else{
        turn = 1;
    }
}

function CanCurrentUserPlay() {
    let currentPlayerCard;

    if (turn === 1) {
        currentPlayerCard = document.querySelectorAll('.player .card')
    } else {

        currentPlayerCard = document.querySelectorAll('.cpu .player')
        
    }
    for(let card of currentPlayerCard){
        if(!isCardPlayable(card.dataset.color, card.dataset.number))

        return true;
    }
    return false;
}

let isDeckUsed = false;
// play Card
function playCard() {
    
    if (this.parentNode.classList.contains('table')) {
        return;
    }


    if (this.parentNode.classList.contains('deck')) {
        if (isDeckUsed === true) {
            
            return;
        }


        if(turn ===1){
        //  handToAppend = playerContainer;
        playerContainer.appendChild(this);

        }else{
            // handToAppend = cpuContainer
            cpuContainer.appendChild(this)
        }

        isDeckUsed = true;


        // if(!isCardPlayable(this.dataset.color, this.dataset.number) === table.color , table.number){
        //     changeTurn();
        // }

        if (!CanCurrentUserPlay()) {
            changeTurn();
        }
        return;
    }


    if(!isCardPlayable(this.dataset.color, this.dataset.number)){
        return;
    }
    if (turn === 1 && this.parentNode.classList.contains('cpu')) {
        return;
    }
    if (turn === 2 && this.parentNode.classList.contains('player')) {
        return;
    }

    changeTurn();

    
    isDeckUsed = false;
        tableontainer.appendChild(this);
        table.color = this.dataset.color;
        table.number = this.dataset.number;
}

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

cards.sort(function () {
    return Math.random() - 0.5
});
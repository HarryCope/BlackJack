`use strict`;

var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();
var playerHand = [];
var compHand = [];


function createDeck() {
    deck = new Array();
    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < suits.length; j++) {
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 11;
            var card = { Value: values[i], Suit: suits[j], Weight: weight };
            deck.push(card);
        }
    }
}

function randomCard(deck){  
return deck[Math.floor(Math.random()*deck.length)];    
}

createDeck()
console.log(deck);
//console.log(randomCard(deck))


const startGame = () => {
    createDeck()
    playerHand.push(randomCard(deck))
    playerHand.push(randomCard(deck))
    compHand.push(randomCard(deck))
    compHand.push(randomCard(deck))

}


playerHand.push(randomCard(deck))
playerHand.push(randomCard(deck))
compHand.push(randomCard(deck))
compHand.push(randomCard(deck))
console.log(playerHand)
console.log(compHand)

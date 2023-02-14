//player informations
let player = {
    name: "Gary",
    chips: 150
}

//card value array
let cards = []

//total card value
let sum = 0

//is that meet blackjack (21)
let hasBlackJack = false

//is that overflow blackjack (21)
let isAlive = false

//to alert the player
let message = ""

//catch the HTML elements tag
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

//print the player informations from player object
playerEl.textContent = player.name + ": $" + player.chips

//random the value
function getRandomCard() {
    /* 
    in this case: 
    if 1     -> return 11
    if 11-13 -> return 10 
    */
    let value = Math.floor( Math.random()*13 ) + 1  // 1 - 13
    if(value === 1){
        return 11
    }else if(value === 11 || value === 12 || value === 13){
        return 10
    }
    return value;
}
//start the game , take 2 card 
function startGame() {
    isAlive = true
    for(let i = 0 ; i < 2 ; i++){
        let tmp = getRandomCard()
        cards.push(tmp);
        sum += tmp;
    }
    renderGame()
}

function renderGame() {

    //print the cards array : current card's value
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    //calculate the sum and check win game or overflow condition 
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

//take a new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object


function drawCard(){
    const availableCards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    const availableSuits = ['Hearts','Spades','Clubs','Diamonds']
    const card = {}
    card['suit'] = availableSuits[Math.floor(Math.random()*4)]
    card['cardNumber'] = availableCards[Math.floor(Math.random()*13)]
    if (card.suit === 'Hearts'|| card.suit === 'Diamonds') {
        card['color'] = 'Red'
    }
    else{
        card['color'] = 'Black'
    }
    return card
}
console.log(drawCard())
console.log(drawCard())
console.log(drawCard())


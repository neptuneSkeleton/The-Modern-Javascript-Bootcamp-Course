// arguments are inputs passed to a function
// fuction(argument)

function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1
    console.log(`Rolled ${roll}`)
}

function throwDice(numDice){
    for (let i = 0; i < numDice; i++) {
        rollDie()
    }
}

throwDice(5)
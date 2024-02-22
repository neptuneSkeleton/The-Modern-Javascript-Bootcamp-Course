function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1
    console.log(`Rolled ${roll}`)
}

rollDie()

function throwDice(){
    rollDie()
    rollDie()
}

throwDice()
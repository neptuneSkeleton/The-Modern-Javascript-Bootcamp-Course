// Break stops the loop
// for nested loops only breaks the current inner loop 


const target = Math.floor((Math.random() * 10))
let guess = Math.floor((Math.random() * 10))
while (true) {
    if(target === guess) break
    console.log(`Target ${target} Guess ${guess}`)
    guess = Math.floor((Math.random() * 10))
}

console.log(`Target ${target} Guess ${guess}`)
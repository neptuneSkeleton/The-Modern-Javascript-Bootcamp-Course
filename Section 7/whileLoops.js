// While loop continues to run as long as its test condition is true
// Good for when you don't know exactly how many times you want it to run

// let j = 0
// while( j <= 5 ){
//     console.log(j)
//     j++
// }

const target = Math.floor((Math.random() * 10))
let guess = Math.floor((Math.random() * 10))

while (guess !== target) {
    console.log(`Target ${target} Guess ${guess}`)
    guess = Math.floor((Math.random() * 10))
}
console.log(`Target ${target} Guess ${guess}`)
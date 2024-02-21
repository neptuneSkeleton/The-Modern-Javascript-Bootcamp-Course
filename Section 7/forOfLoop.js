//A nice easy way to iterating over arrays

// for( variable of iterable) {
//  statement
// }

let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ]
//using for loop
for (let i = 0; i < subreddits.length; i++) {
    console.log(subreddits[i])
}
//using for of loop
for (let sub of subreddits) {
    console.log(sub)
}


// ----------------------Example 2---------------------------


const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

// sum of each row using a for loop
for (let i = 0; i < magicSquare.length; i++){
    let row = magicSquare[i]
    let sum = 0
    for (let j = 0; j < row.length; j++){
        sum += row[j]
    }
    console.log( `${row} summed to ${sum}`)
}

//sum of each row using a for of loop
for (let row of magicSquare) {
    let sum = 0;
    for(let num of row) {
        sum += num
    }
    console.log( `${row} summed to ${sum}`)
}


//--------------------With Objects-----------------

const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    'In Brugues': 9,
    Amadeus: 10,
    'Kill Bill': 8,
    'Little Miss Sunshine': 8.5,
    Coraline: 7.5
}

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie])
}

const ratings = Object.values(movieReviews)
let total = 0
for (let rating of ratings) {
    total += rating
}
console.log ("average: " + total/ratings.length)
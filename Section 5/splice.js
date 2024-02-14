// Splice - change the contents of an array by removing or replacing existing elements
// and/or adding new elements in place
// returns deleted values
// splice(startIndex, numToDelete, valueToAdd)

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'turtle']

animals.splice(1,0,'octopus')

console.log(animals) // (7) ['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'turtle']

console.log (animals.splice(3,2)) // returns (2) ['whale', 'bear']
console.log(animals) // (5) ['shark', 'octopus', 'salmon', 'lizard', 'turtle']

console.log (animals.splice(3,0,'snake', 'frog')) // returns empty array because we are not deleting
console.log(animals) // (7) ['shark', 'octopus', 'salmon', 'snake', 'frog', 'lizard', 'turtle']
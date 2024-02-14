//Slice - copy a portion of an array into a new array.  does not modify original array

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'turtle']

let swimmers = animals.slice(0, 3) // noninclusive, which is why we need 3 rather than 2 as the end point
console.log(swimmers) // (3) ['shark', 'whale', 'salmon']

let mammals = animals.slice(2, 4) // Starting index IS inclusive 
console.log(mammals) //(2) ['whale', 'bear']

let landAnimals = animals.slice(-3) // Starts from the end of the array
console.log(landAnimals) // (3) ['bear', 'lizard', 'turtle']

let animalCopy = animals.slice() // empty returns the entire array, can be used to copy
console.log(animalCopy) // (6) ['shark', 'salmon', 'whale', 'bear', 'lizard', 'turtle']
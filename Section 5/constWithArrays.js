// When using const to store an array, the values of the array can change as long as the reference remains the same (see referenceTypes.js for more)
// const should be used with arrays unless there is a good reason to use let

const foods = ['milk']
foods.push('chocolate')
foods.unshift('tortillas')

console.log(foods) // (3) ['tortillas', 'milk', 'chocolate']

foods = ['turkey', 'cheese'] //Not allowed, cannot make a new array because foods is a const
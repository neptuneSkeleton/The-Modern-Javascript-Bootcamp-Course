// Value type Variables
// primative types
// contains the actual value of the variable

let fruit = 'orange'
let color = fruit

console.log(fruit) //orange
console.log(color) //orange

fruit = 'watermelon'

console.log(fruit) //watermelon
console.log(color) //orange


// Reference type variables
// ex: When working with arrays, variables store a pointer to where the array exists rather than the array itself

let nums = [5,6,7,8] // nums does not contain the array, it contains a reference to the array
let otherNums = nums // also does not contain the array, contains the same reference as nums

console.log(nums) // (4) [5, 6, 7, 8]
console.log(otherNums) // (4) [5, 6, 7, 8]

nums.push(9)

console.log(nums) // [5, 6, 7, 8, 9]
console.log(otherNums) // [5, 6, 7, 8, 9]

// Reverse - reverses the array - Actually makes changes to the array, does not return a new array like some other methods
let numbers = ['0', "1", "2", "3", "4"]
numbers.reverse()
console.log(numbers) // (5) ['4', '3', '2', '1', '0']


// Join - returns a string by concatenating all elements.  Can specify separator. 
console.log(numbers.join()) // 4,3,2,1,0
console.log(numbers.join('-')) // 4-3-2-1-0

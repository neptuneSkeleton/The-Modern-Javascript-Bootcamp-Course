// sort - sorts the array and returns a the sorted array.  Alters the existing array.
// default sort method converts elements to strings and then compares UTF-16 code units

let people = ['Tony', 'Bob', 'Rex', 'Jenny']
people.sort()
console.log(people) // (4) ['Bob', 'Jenny', 'Rex', 'Tony']

let nums = [10, 1000, 98, 99, 31]
nums.sort()
console.log(nums) // (5) [10, 1000, 31, 98, 99] 
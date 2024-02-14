//shift - remove from start - returns removed element
//unshift - add to start - returns new length


let dishes = ['big platter']
console.log(dishes) // ['big platter']

dishes.unshift('large plate')
console.log(dishes) // (2) ['large plate', 'big platter']

dishes.unshift('small plate')
console.log(dishes) // (3) ['small plate', 'large plate', 'big platter']

dishes.unshift('bowl')
console.log(dishes) // (4) ['bowl', 'small plate', 'large plate', 'big platter']

dishes.shift()
console.log(dishes) //(3) ['small plate', 'large plate', 'big platter']

dishes.shift()
console.log(dishes) //(2) ['large plate', 'big platter']
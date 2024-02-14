//push - add to end
//pop - remove from end

let shoppingList = [
    'potato',
    'onion',
    'carrots',
    'bread'
]

shoppingList.push('eggs')

console.log (shoppingList) //['potato', 'onion', 'carrots', 'bread', 'eggs']

shoppingList.pop()

console.log (shoppingList) //['potato', 'onion', 'carrots', 'bread']

const nextItem = shoppingList.pop()

console.log (shoppingList) //['potato', 'onion', 'carrots']
console.log (nextItem) //bread

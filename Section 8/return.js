// built in methods return values when call them.  We can store those values
// capture return values  in a variable
// you can only return one thing from a function
// return statements ends function execution AND specifies the value to be returned by that function

// function add(x, y) {
//     return (x + y)
// }

// const total = add(4,5)

// console.log(total)


// function isPurple(color) {
//     if (color.toLowerCase() === 'purple'){
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(isPurple('purple'))


// function isPurple(color) {
//     if (color.toLowerCase() === 'purple'){
//         return true
//     }
//     return false
// }

// console.log(isPurple('purple'))

function isPurple(color) {
    return color.toLowerCase() === 'purple'
}

console.log(isPurple('purple'))

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta'){
            return true
        }
    }
    return false;
}
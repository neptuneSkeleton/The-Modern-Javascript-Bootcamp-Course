// 


const numbers = {
    100: 'One Hundred',
    16: 'sixteen'
}
// dot syntax cannot be used here.  numbers.100 is not valid.  Instead square bracket syntax is used. 
console.log(numbers[100]) //'One  Hundred"


const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
}

let mysteryColor = 'yellow'
// square brackets can also be used if we wanted to use a variable
console.log(palette[mysteryColor]) // #f9ca24
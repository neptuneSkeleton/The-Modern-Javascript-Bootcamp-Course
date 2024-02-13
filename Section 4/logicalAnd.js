// AND (&&)
// Both sides must be true

let password = 'taco tuesday'

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('valid password')
} 
else {
    console.log ('INVALID PASSWORD')
}
// Falsy values:
// - False
// - 0
// - "" (empty string)
// - null
// - undefined
// - NaN

// Everything else is Truthy!

let loggedInUser = null

if (loggedInUser) {
    console.log('You are logged in')
}
else {
    console.log('Please log in.')
}
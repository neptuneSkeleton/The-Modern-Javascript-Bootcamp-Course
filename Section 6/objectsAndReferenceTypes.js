// objects stored in variables are stored as a referenece variable
// most of the time const is used because we don't want the reference to change

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
}

const palette2 = palette
palette2.green = '#ebf876'

console.log(palette) // {red: '#eb4d4b', yellow: '#f9ca24', blue: '#30336b', green: '#ebf876'}
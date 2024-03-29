// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false


function isValidPassword(username, password) {
    if (password.length < 8) {
        return false
    }
    for (let char of password) {        //could have also used indexOf() here. 
        if (char === ' ') {
            return false
        }
    }
    if (password.indexOf(username) !== -1){
        return false
    }
return true
}
console.log(isValidPassword('user', 'moocowmoo'))
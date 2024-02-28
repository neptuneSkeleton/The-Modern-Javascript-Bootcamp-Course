// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
'q','r','s','t','u','v','w','x','y','z']
function isPangram(sentence){
    for (let letters of alpha) {
        console.log(letters)
        if (sentence.toLowerCase().indexOf(letters) === -1){
            return false
        }
    }
    return true
}

console.log(isPangram("THE quick brown fox jumps over the laZy dog"))
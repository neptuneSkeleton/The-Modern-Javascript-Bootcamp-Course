// We can loop over the keys of an object

// for (variable in object) {
//   statement   
// }

const jeopardyWinnings = {
    regularPlay: 2000000,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
}

for (let prop in jeopardyWinnings) {
    console.log(prop)
    console.log(jeopardyWinnings[prop])
}

let total = 0
for (let prop in jeopardyWinnings) {
    total += jeopardyWinnings[prop]
}
console.log(total)
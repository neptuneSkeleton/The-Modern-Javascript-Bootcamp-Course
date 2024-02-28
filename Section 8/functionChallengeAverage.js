function getAverageScore(examScores) {
    let total = 0
    for (let i = 0; i < examScores.length; i++) {
        total += examScores[i]
    }
    let average = total / examScores.length
    return average
}

getAverageScore([10, 25, 25, 50])
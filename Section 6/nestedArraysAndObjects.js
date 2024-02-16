// Objects can be filled with keys that are arrays or other objects

const student = {
    firstName : 'David',
    lastName: 'Jones',
    strengths : ['Music', 'Art'],
    exams : {
        midterm: 92,
        final: 88
    }
}

let averageGrade = (student.exams.final+student.exams.midterm) / 2
console.log(averageGrade) // 90

console.log(student.strengths[1]) // Art

//Array of objects
const shoppingCart = [
    {
        product: 'Jenga',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'echo dot',
        price: 29.99,
        quantity: 3
    },
    {
        product: 'fire stick',
        price: 39.99,
        quantity: 2
    }
]
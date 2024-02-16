let nums = [1,2,3]
let mystery = [1,2,3]
let moreNums = nums

console.log(nums===mystery) //False - references are differnt 
// nums -> 128194729
// mystery -> 9927181

console.log(nums === moreNums) // true


const user = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    notifications: []
}

// if(user.notifications === [])  This would not work because [] a new array and new reference 

if (!user.notifications.length) {
    console.log('NO NEW NOTIFICATIONS')
}


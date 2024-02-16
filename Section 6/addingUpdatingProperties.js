// You can have an empty object when you create it and add properties later

const userReviews = {}

userReviews['queenbee49'] = 4.0

console.log(userReviews) // {queenbee49: 4}

userReviews.mrSmith78 = 3.5

console.log(userReviews) // {queenbee49: 4, mrSmith78: 3.5}

userReviews.queenbee49 = 5

console.log(userReviews)  // {queenbee49: 5, mrSmith78: 3.5}

userReviews.queenbee49 += 2

console.log(userReviews) // {queenbee49: 7, mrSmith78: 3.5}
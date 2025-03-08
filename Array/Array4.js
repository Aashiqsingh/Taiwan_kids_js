var users = ["naisha","taksh","dravya","rahul","samir","tejas","dev"];


// map : it will return new Array with same length

// var newArray = users.map((u)=>{
//     return u.toUpperCase()
// })

// console.log(newArray);

var newArray = users.map((user)=>{
    return user.length > 5
})

console.log(newArray);

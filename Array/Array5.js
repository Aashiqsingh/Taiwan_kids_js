var users = ["naisha","taksh","dravya","rahul","samir","tejas","dev"];


// filter : it will return new Array with modified data 

var x = users.filter((user)=>{
    return user.length > 5
})

console.log(x);


users.forEach((user)=>{
    if(user.length > 5){
        console.log(user);
    }
})

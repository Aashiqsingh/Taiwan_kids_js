
var language = ["hindi","gujarati","english","tamil","telgu","mandirin"]



const deleteLang = (langName)=>{

    return  language.filter((lang)=> lang != langName)

}



var ans = deleteLang("telgu")
console.log(ans);











// const deleteLang = (langName)=>{

//     return  language.filter((lang)=>{
//         return lang != langName
//     })

// }



// var ans = deleteLang("gujarati")
// console.log(ans);

















// const deleteLang = (langName)=>{

//     var x = language.filter((lang)=>{
//         return lang != langName
//     })


//     return x
    
// }



// var ans = deleteLang("gujarati")
// console.log(ans);

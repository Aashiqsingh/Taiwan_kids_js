//  we have to find positive and negative number

// var num = 16;

// if(num > 0){
//     console.log("It is positive number");
    
// }
// else{
//     console.log("It is negative number");
// }


// var maths = 81;
// var eng = 76;
// var sci = 89;

var maths = parseInt(prompt("Enter your maths marks.."))
var eng = parseInt(prompt("Enter your eng marks"))
var sci = parseInt(prompt("Enter your sci marks"))


var sum = maths + eng + sci;
console.log("Total sum of all subject = ",sum);

var per = sum / 3;
console.log("Percentage = ",per);

if(per > 90){
    console.log("Grade A");
}
else if(per > 80){
    console.log("Grade B");
}
else if(per > 70){
    console.log("Grade C");
    
}
else if(per > 60){
    console.log("Grade D");
}
else if (per < 60){
    console.log("Fail...");
}


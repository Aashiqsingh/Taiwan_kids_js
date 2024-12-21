function add(a,b){

    console.log("Addition = ",a+b);
    
}
function sub(a,b){
    console.log("Subtraction = ",a-b);
}
function mul(a,b){
    console.log("Multiplication = ",a*b);
}

function div(a,b){
    console.log("Division = ",a/b);
    
}


var a = 12;
var b = 8;
var choice = parseInt(prompt("1 for Add \n2 for sub \n3 for mul \n4 for div \n\n\n Enter your choice :"))

switch(choice){

    case 1:
        add(a,b);
        break;

    case 2:
        sub(a,b);
        break;

    case 3:
        mul(a,b);
        break;

    case 4:
        div(a,b);
        break;

    default:
        console.log("Invalid choice");
}
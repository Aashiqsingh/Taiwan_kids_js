var a = parseInt(prompt("Enter the first number :"))
var b = parseInt(prompt("Enter the second number :"))


var choice = parseInt(prompt("1 -- Addition \n2 -- Subtraction\n 3 -- multiplication\n4 -- division\n 5 -- module\n\n\n Enter your choice :"))

switch(choice){
    case 1 :
        console.log("Addition = ",a+b);
        break;

    case 2:
        console.log("Subtrcation = ",a-b);
        break;

    case 3:
        console.log("Multiplication = ",a*b);
        break;

    case 4:
        console.log("Division = ",a/b);
        break;

    case 5:
        console.log("Module = ",a%b);
        break;

    case 6:

    default:
        console.log("Invalid choice");
        
        
        
}
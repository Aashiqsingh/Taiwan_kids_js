var confirmation = confirm("Are u enter in ATM or no?")
var pin = 6354;
var avlbal = 35000;

const deposit = ()=>{
    var amount = parseInt(prompt("Enter the amount you want to deposit"));
    avlbal += amount;

    console.log("Deposited successfully...");
    

    console.log("Now your avlbal is = ",avlbal);
    
}

const withdraw = ()=>{
    var amount = parseInt(prompt("Enter the amount you want to withdraw"));

    if(amount < avlbal)
    {
        console.log("you have successfully withdraw...");
        avlbal -= amount;

        console.log("Now after withdraw your current balanace is = ",avlbal);
        
        
    }
    else{
        console.log("Insufficient balance...!");
    }
}

const checkBal = ()=>{
    console.log("Your avlbal is = ",avlbal);
    
}

if(confirmation == true)
{
    var accNo = prompt("Enter your Account no :-");
    var Upin = parseInt(prompt("Enter your pin :-"))

    if(pin == Upin)
    {
        var choice = parseInt(prompt("1 for deposit \n2 for withdraw \n3 for checkBal \n\n\nEnter your choice"));

        switch(choice){
            case 1:deposit();
            break;

            case 2:withdraw();
            break;

            case 3:checkBal();
            break;
        }
    }
    else{
        console.log("Incorrect Pin please try again...");
        
    }
}
else{
    console.log("Thankyou for visiting ATM bank or Baroda...");
    
}
const lasvegas = (amount)=>{

    console.log("Naisha your tour confirm lasvegas with package " + amount);
    
}

const singapore = (amount)=>{
    
    console.log("Taksh your tour confirm singapore with package " + amount);
}

const goa = (amount)=>{
    
    console.log("Dravya your tour confirm goa with package " + amount);
}

var budget = 4000;
if(budget > 3500)
{
    lasvegas(budget)
}
else if(budget > 2500){
    singapore(budget)
}
else if(budget > 1500){
    goa(budget)
}
else{
    console.log("Insufficient budget to book tour.")
}
function taiwan(name,amount){

    console.log(name + " your tour is confirm in Taiwan with package " + amount);
    
}

function singapore(name,amount){
    
    console.log(name + " your tour is confirm in Singapore with package " + amount);
}

function hongKong(name,amount){
    
    console.log(name + " your tour is confirm in Hong Kong with package " + amount);
}


var budget = 1000;

if(budget > 3500)
{
    taiwan("taksh",budget)
}
else if(budget > 2500)
{
    singapore("Naisha",budget)
}
else if(budget > 1500)
{
    hongKong("Karen",budget)
}
else {
    console.log("you need more money to go anywhere...");
    
}
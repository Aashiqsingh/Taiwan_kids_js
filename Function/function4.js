function taiwan(name,amount){

    return name + " your tour is confirm in Taiwan with package " + amount
    
}

function singapore(name,amount){
    
    return name + " your tour is confirm in Singapore with package " + amount
}

function hongKong(name,amount){
    
    return name + " your tour is confirm in Hong Kong with package " + amount
}


var budget = 3000;

var temp;

if(budget > 3500)
{
    temp = taiwan("taksh",budget)
    
}
else if(budget > 2500)
{
    temp = singapore("Naisha",budget)
}
else if(budget > 1500)
{
    temp = hongKong("Karen",budget)
}
else {
    console.log("you need more money to go anywhere...");
    
}

console.log(temp);

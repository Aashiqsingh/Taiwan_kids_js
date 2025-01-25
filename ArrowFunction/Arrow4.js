const science = (option)=>{
    return option.name + " your addmision confirm in science stream with per " + option.per
}

const commerce = (option)=>{
    return option.name + " your addmision confirm in commerce stream with per " + option.per
}

const art = (option)=>{
    return option.name + " your addmision confirm in art stream with per " + option.per
}


var percentage = 61;
var flag;

if(percentage > 90)
{
    flag = science({name:"naisha",per:percentage})
}
else if(percentage > 70){

    flag = commerce(
        {
            name:"Dravya",
            per:percentage
        }
    )
}
else if(percentage > 50)
{
    flag = art({name:"Taksh",per:percentage})
}

console.log(flag);

function science(option){
    console.log(option.name + " your addimision confirm in science with per " + option.per);
    
}

function commerce(option){
    console.log(option.name + " your addimision confirm in commerce with per " + option.per);
}

function arts(option){
    console.log(option.name + " your addimision confirm in arts with per " + option.per);
}


// cb -- callback 
function addimision(file , cb)
{

    cb({name:file.name,per:file.per});
}

var percentage = 71;

if(percentage > 90)
{
    addimision(
        {
            name:"naisha",
            per:percentage
        },
        science
    )
}
else if(percentage > 70){
    addimision({name:"taksh",per:percentage},commerce)
}
else if(percentage > 50)
{
    addimision({name:"dravya",per:percentage},arts)
}
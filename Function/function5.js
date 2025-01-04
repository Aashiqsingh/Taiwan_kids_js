function science(per,fname){
    return fname + " your admission confirm in scince stream with per " + per
}
function commerce(per,fname){
    return fname + " your admission confirm in commerce stream with per " + per

}

function art(per,fname){
    return fname + " your admission confirm in art stream with per " + per
}

var percentage = 51;
var flag;


if(percentage > 90)
{
    flag = science(percentage,"hiya");
}
else if(percentage > 70)
{
    flag = commerce(percentage,"naisha");
}
else if(percentage > 50){
    flag = art(percentage,"karen");
}
console.log(flag);

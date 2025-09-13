let hours = 0;
let mins = 0;
let secs = 0;


let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


const start2 = ()=>{
    secs++
    if(secs == 60){
        secs = 0;
        mins++
    }
    if(mins == 60){
        mins = 0;
        hours++
    }

    hour.innerHTML = hours < 10 ? "0"+hours : hours 
    min.innerHTML = mins < 10 ? "0"+mins : mins
    sec.innerHTML = secs < 10 ? "0"+secs : secs

    
    
}

const start = ()=>{

    ans = setInterval(()=>{
        start2()
    },1000)
}

const stop = ()=>{
    clearInterval(ans)
}

const reset = ()=>{
    hours = 0;
    mins = 0;
    secs = 0;

    hour.innerHTML = hours < 10 ? "0"+hours : hours
    min.innerHTML = mins < 10 ? "0"+mins : mins
    sec.innerHTML = secs < 10 ? "0"+secs : secs 


    clearInterval(ans)
}
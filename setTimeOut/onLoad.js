const green = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "green";



    setTimeout(()=>{
        red();
    },3000);
}


const red = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "red";

    setTimeout(()=>{
        blue();
    },3000);
}

const blue = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "blue";


    setTimeout(()=>{
        green();
    },3000);
}
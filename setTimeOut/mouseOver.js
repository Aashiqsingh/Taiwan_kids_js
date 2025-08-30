let b1 = document.getElementsByClassName("b1")
console.log(b1);

colors = ["red", "green", "blue", "yellow", "purple","orange","pink","orangered"];

for(let i=0;i<b1.length;i++){

    


    b1[i].addEventListener("mouseover",()=>{
        b1[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    })
}

for(let i=0;i<b1.length;i++){

    


    b1[i].addEventListener("mouseleave",()=>{
        b1[i].style.backgroundColor = "white"
    })
}
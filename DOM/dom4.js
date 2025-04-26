// let a = 10;

var colors = ["red","green","blue","red","orange","yellow","pink","darkblue","aqua","teal"]

function changeColor(){

    // console.log("hellow");
    // console.log(a++);

    var randomIndex = Math.floor(Math.random() * colors.length)

    console.log(randomIndex);

    var mydiv = document.getElementById("mydiv");

    mydiv.style.backgroundColor = colors[randomIndex]
    
    
}
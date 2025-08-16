const changeColor = ()=>{
    let color = document.getElementById("color")

    console.log(color.value);

    var mydiv = document.getElementById("mydiv");
    mydiv.style.height = " 200px";
    mydiv.style.width = " 200px";
    mydiv.style.backgroundColor = color.value;
    mydiv.style.margin = "100px 400px"
    
}

const changeRadius = ()=>{
    let radius = document.getElementById("radius")

    mydiv.style.borderRadius = radius.value;
}
const saveElement = ()=>{
    let box = document.getElementById("box")

    let h1 = document.createElement("h1")
    h1.innerHTML = "Taiwan kids batch";


    let link = document.createElement("a")
    link.innerHTML = "Google";
    link.href = "https://www.google.com";
    link.target = "_blank";



    let img = document.createElement("img")
    img.src = "https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=465&dpr=1&s=none&crop=none";
    img.style.height = "200px";
    img.style.width = "200px";



    box.appendChild(h1)
    box.appendChild(link)
    box.appendChild(img)
}
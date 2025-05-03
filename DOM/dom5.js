var images = ["img1.jpg","img2.jpg","img3.avif","img4.jpg","img5.jpg"]


const changeImage = ()=>{

    var randomIndex = Math.floor(Math.random() * images.length);

    let img = document.getElementById("img");


    img.src = "../image/"+ images[randomIndex]
}
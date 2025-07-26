var images = ["img1.jpg", "img2.jpg", "img3.avif", "img4.jpg", "img5.jpg"];
let prev = document.getElementById("prev");


var currentIndex = 0;
let img = document.getElementById("img");
prev.addEventListener("click",()=>{

                    //   (4 - 1 + 5) % 5
    currentIndex = (currentIndex -1 + images.length) % images.length
    console.log(currentIndex);
    
    img.src = "../image/"+ images[currentIndex];
})

let next = document.getElementById("next");
next.addEventListener("click",()=>{
                    //  (3 + 1 ) % 5
    currentIndex = (currentIndex + 1) % images.length;
    console.log(currentIndex);

    img.src = "../image/"+images[currentIndex];
    
})
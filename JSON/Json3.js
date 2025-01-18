var product = {
    productId: 321,
    name:"I PHONE",
    price : 89667,
    color:["white","black","pink","green"],
    isAvailable: true,
    details:{
        weight: 150,
        screenSize: 5.5,
        camera: "12MP",
        battery: "3000mAh",
        operatingSystem: "iOS 12.4",
        processor: "A12 Bionic",
        ram: "4GB",
        storage: "64GB"
    }
}

// console.log(product);
// console.log(product.name);
// console.log(product.color);
// console.log(product.color[0]);
// console.log(product.color[1]);

for(let i=0;i<product.color.length;i++){
    console.log(product.color[i]);
    
}

console.log(product.details);
console.log(product.details.camera);
console.log(product.details.storage);







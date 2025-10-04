function getData(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("Data fetched successfully...")
            reject("some error occured...")
        },4000)
    })

    console.log(promise);
    promise.then((data)=>{
        console.log(data);
    })
    promise.catch((err)=>{
        console.log(err);
    })
    
}

getData()
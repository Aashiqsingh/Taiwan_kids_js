const getData = ()=>{
    let promise = new Promise((success,failure)=>{
        setTimeout(()=>{
            let flag = false;
            if(flag == true){
                success({
                    message:"Data fetched successfully...",
                    status:200
                })
            }
            else{
                failure({
                    message:"some error occured...",
                    status:400
                })
            }
        },5000)
    })


    // console.log(promise);
    promise.then((res)=>{
        console.log(res);
    })
    promise.catch((err)=>{
        console.log(err);
    })
    
}

getData()
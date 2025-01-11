const isPrime = (n)=>{

    for(let i=2;i<n;i++){
        if(n%i==0)
        {
            return false;
        }
    }
    return true;

}

var x = isPrime(23)
console.log(x === true ? "Prime" :"Non-Prime");

const getClock = ()=>{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // console.log(hours,minutes,seconds)

    let hour = document.getElementById("hours")
    let minute = document.getElementById("minutes")
    let second = document.getElementById("seconds")

    hour.innerHTML = hours < 10 ? "0"+hours : hours
    minute.innerHTML = minutes < 10 ? "0"+minutes : minutes
    second.innerHTML = seconds < 10 ? "0"+seconds : seconds

}

setInterval(()=>{
    getClock()
},1000)
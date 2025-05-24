const submitHandler = (event)=>{
    event.preventDefault();

    const name = document.getElementById("name")
    const age = document.getElementById("age")
    const gender = document.getElementsByName("gender")

    var gen = ""

    if(gender[0].checked == true){
        gen = "Male"
    }
    else if(gender[1].checked == true){
        gen = "Female"
    }
    else if(gender[2].checked == true){
        gen = "Other"
    }

    let users = {
        name: name.value,
        age: age.value,
        gender: gen
    }
    console.log(users);

    let result = document.getElementById("result");


    if(gen == "Male")
    {
        if(age.value > 18)
        {
            result.innerHTML = "You are eligible for vote.."
        }
        else{
            result.innerHTML = "You are not eligible for vote.."
        }
    }
    else if(gen == "Female"){
        if(age.value > 21)
        {
            result.innerHTML = "You are eligible for vote.."
        }
        else{
            result.innerHTML = "You are not eligible for vote.."
        }
    }
    else{
        if(age.value > 25){
            result.innerHTML = "Eligible for vote.."
        }
        else{
            result.innerHTML = "Not eligible for vote.."
        }
    }
    
}
const submitHandler = (event)=>{
    event.preventDefault();

    // alert("Form submitted...")
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const mobile = document.getElementById("mobile");


    const nameErr = document.getElementById("nameErr");
    const ageErr = document.getElementById("ageErr");
    const mobileErr = document.getElementById("mobileErr");

    if(name.length <= 0)
    {
        // alert("Name is required");
        nameErr.innerHTML = "Name is required";
        nameErr.style.color = "red";
    }
    else if(name.length < 5)
    {
        nameErr.innerHTML = "Name must be at least 5 characters";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = name;
        nameErr.style.color = "green";
    }

    if(age.length == "")
    {
        ageErr.innerHTML = "Age is required";
        ageErr.style.color = "red";
    }
    else if(age < 18){
        ageErr.innerHTML = "Age must be greater than 18";
        ageErr.style.color = "red";
    }
    else{
        ageErr.innerHTML = age
        ageErr.style.color = "green";
    }

    var mobilePattern = /[6-9]{1}[0-9]{9}$/;

    if (mobile.value.match(mobilePattern)) {
        mobileErr.innerHTML = "Valid Mobile Number";
        mobileErr.style.color = "green";
    } else {
        mobileErr.innerHTML = "Mobile number is invalid";
        mobileErr.style.color = "red";
    }
    

    console.log("Form submitted...");
    



    // console.log("Name = ",name);
    // console.log("Age = ",age);
    // console.log("Mobile = ",mobile);
    

}
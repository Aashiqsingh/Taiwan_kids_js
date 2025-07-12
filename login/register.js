const register = ()=>{
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const age = document.getElementById("age")

    console.log(name.value , " " , email.value , " " , password.value , " " , age.value);

    location.href = "./login.html"

    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    
}

const login = ()=>{

    const email = document.getElementById("email")
    const password = document.getElementById("password")


    const localstorageEmail = localStorage.getItem("email")
    const localstoragePassword = localStorage.getItem("password")

    if(email.value === localstorageEmail && password.value === localstoragePassword){
        alert("Login Successfully...")
    }
    else{
        alert("Login Failed...")
    }

}
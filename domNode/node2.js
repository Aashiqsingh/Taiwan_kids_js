var employees = [
    {
        id:1,
        name:"taksh",
        age:20,
        job:"teacher",
        salary:1000
    },
    {
        id:2,
        name:"dravya",
        age:18,
        job:"devloper",
        salary:2000
    },
    {
        id:3,
        name:"naisha",
        age:21,
        job:"doctor",
        salary:3000
    },
    {
        id:4,
        name:"jiyaan",
        age:19,
        job:"employee",
        salary:4000
    },
    {
        id:5,
        name:"shan",
        age:20,
        job:"HR",
        salary:2500
    }
]

console.log(employees);


const getData = ()=>{
    let tbody = document.getElementById("tbody")
    employees.map((emp)=>{
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let jobTd = document.createElement("td")
        let salaryTd = document.createElement("td")

        idTd.innerHTML = emp.id
        nameTd.innerHTML = emp.name
        ageTd.innerHTML = emp.age
        jobTd.innerHTML = emp.job
        salaryTd.innerHTML = emp.salary

        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(ageTd)
        tr.appendChild(jobTd)
        tr.appendChild(salaryTd)
        tbody.appendChild(tr)
    })
}
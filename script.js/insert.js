document.getElementById("btn").addEventListener("click",addData);

async function addData(e) {
    e.preventDefault();

    let empNo = document.getElementById("empNo").value;
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;

    let url = "http://localhost:3000/employees";
    
    try{
        let myObj = await fetch(url,{
            method:"POST",
            body:JSON.stringify({
                employeeNo : empNo,
                name : name,
                city : city,
                salary : salary,
            }),
            headers: {
                "Context-Type":"application/json; charset=UTF-8"
            },
        })
        console.log(myObj);
        let res = await myObj.json();
        alert("success");
    }
    catch(err){
        alert("error",err);
    }

    
}
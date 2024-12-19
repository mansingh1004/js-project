async function dataShow(){
    let mytable = `
    <table border="1px solid black" width="600px" bgcolor= "lightblue">
    <tr bgcolor="blue" color="white"</th>
    <th>employee no</th>
    <th> Employee name</th>
    <th>city</th>
    <th>salary</th>
    </tr>
    `;
    // url of the server to fetch data 
    let url = "http://localhost:3000/employees";

    // get data from server
    let myobj = await fetch(url);
    console.log(myobj); // response object

    // converting response object to json object (array of object)
    let data = await myobj.json();
    console.log(data);

    // looping through each in the array
    data.map((key)=>{
        mytable += `
        <tr >
        <td>${key.employeeNo}</td>
        <td>${key.name}</td>
        <td>${key.city}</td>
        <td>${key.salary}</td>
        </tr>
        `;
    });
    mytable += "</table>";
    document.getElementById("demo").innerHTML = mytable;
    

}
dataShow();
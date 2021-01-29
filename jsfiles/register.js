 register =(Event)=>{
    console.log("calling method")
    let obj={
        "firstName":document.getElementById("fname").value,
        "lastName":document.getElementById("lname").value,
        "email":document.getElementById("email").value,
        "department":document.getElementById("department").value,
        "sallary":document.getElementById("sallary").value
    }
    
    console.log("name priniting ",obj);
   
    $.ajax({
        type:'post',
        url:"http://localhost:3000/api/register",
        data:JSON.stringify(obj),
        contentType:"application/json",
        success:function(result){
            if (result.success == false) {
                document.getElementById("exampleData").innerHTML = (result.data._message).toUpperCase();
                alert("Invalid Input..!!");
            }
            else {
                document.getElementById("exampleData").innerHTML = "Employee Data Added Sucessfully";
                alert("Employee Data Added Sucessfully");
                window.open("http://127.0.0.1:5500/html/dashboard.html#", target = "_self");
            }
        },
        error:function(err){
            console.log(err);
        }
    })     
} 

// Update Function when local storage contains value
update=()=>{
    let obj={
        "firstName":document.getElementById("fname").value,
        "lastName":document.getElementById("lname").value,
        "email":document.getElementById("email").value,
        "department":document.getElementById("department").value,
        "sallary":document.getElementById("sallary").value
    }
    
    console.log("name printing ",obj);
    console.log("Updating Employee Data")
    let id = localStorage.getItem("id")
    $.ajax({
        type: "put",
        url: "http://localhost:3000/api/updateEmployeeData/" + id,
        data: JSON.stringify(obj),
        contentType: "application/json",

        success: (result) => {
            console.log("result"+result)
                document.getElementById("exampleData").innerHTML = "Employee Data Updated Sucessfully";
                alert("Employee Data Updated Sucessfully");
                window.open("http://127.0.0.1:5500/html/dashboard.html?", target = "_self");
        },

        error: (err) => {
            console.log("Error ", err)
        }
    })
    localStorage.removeItem("id");


}





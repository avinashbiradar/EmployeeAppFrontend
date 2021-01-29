//Function is called automatically when page loads
onLoad = () => {
    console.log("Local Storage = " + localStorage.getItem("id"))
    let employeeId = localStorage.getItem("id")
    $.ajax({
        type: "get",
        url: "http://localhost:3000/api/getEmployeeListOne/" + employeeId,
        data: "json",

        success: (result) => {
            console.log("Employee Data: ", result);
            $("#fname").val(result.firstName);
            $("#lname").val(result.lastName);
            $("#email").val(result.email);
            $("#sallary").val(result.sallary);
            $("#department").val(result.department);
           
        },
        error: (err) => {
            console.log("Error ", err)
        }
    })
}
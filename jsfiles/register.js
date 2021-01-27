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
            console.log("response aftercall",result);
        },
        error:function(err){
            console.log(err);
        }
    })
        
   
}
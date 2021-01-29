
let EmpData=[];
$(document).ready(function (){
let innerHtml;
$.ajax({
 type:'get',
 url:'http://localhost:3000/api/getEmployeeList',
 contentType:"application/json",
 success:function(result){
     console.log("response aftercall");
     console.log("result success ", result);
     let employeeArray =result;
     
     $.each(employeeArray,function(index,value){
         EmpData.push(value._id);
         innerHtml +=`<tr>
         <td> ${value.firstName}</td>
         <td> ${value.lastName}</td>
         <td> ${value.email}</td>
         <td> ${value.sallary}</td>
         <td> ${value.department}</td>
         
         <td> <button type="button" class="btn btn-warning" onclick="getDataById(${index})">Edit</button></td>
         <td> <button type="button" class="btn btn-danger" onclick="deleteEmployee(${index});return false">Delete</button></td>
         </tr>
         
         `
     })
     $('#customers').append(innerHtml)
 },
    error:function(err){
        console.log("error in " , err);
     }
  })

})


function deleteEmployee(id){
    let temp =EmpData[id];
    console.log(id)
$.ajax({
    method:'delete',
    url:'http://localhost:3000/api/deleteEmployeeData/'+temp,
    success:function(){
        alert("record deleted ")
        console.log("result success "); 
        window.open("http://127.0.0.1:5500/html/dashboard.html?", target = "_self");
    },
    error:function(error){
        alert(error);
    }
   })
}

// Performs edit part and stores id in localStorage
    getDataById = (id) => {
        console.log("getDataById" + id)
        let employeeId = EmpData[id];
        localStorage.setItem("id", employeeId);
        console.log("local " + localStorage.getItem("id"))
        window.open("http://127.0.0.1:5500/html/update.html?", target = "_self");
}
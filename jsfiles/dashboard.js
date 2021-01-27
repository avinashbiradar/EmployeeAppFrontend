
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
         
         <td> <button type="button" class="btn btn-warning"onclick="updateEmployee(${value.id})">Edit</button></td>
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
        console.log("result success ", temp); 
    },
    error:function(error){
        alert(error);
    }
   })
   this.readEmployee();
 
}

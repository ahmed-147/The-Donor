

var choosenArray=[];

try{
// Retrieve the object from storage
var retrievedData = localStorage.getItem('donaterArr');
//transform to json
var itemsinJson = JSON.parse(retrievedData);
//get users from local storage
console.log("item in json",itemsinJson); 
}catch
{
    console.log("not savd items yet"); 
}





function saveDonater(){
    var userName = document.getElementById("userName").value;
    var age = document.getElementById("age").value;
    var bloodType = document.getElementById("bloodType").value;
    var Id = document.getElementById("Id").value;
   
    userObj = {"userName":userName,"age":age,"bloodType":bloodType,"Id":Id};
    choosenArray.push(userObj);
    localStorage.setItem('donaterArr',JSON.stringify(choosenArray));
            
}
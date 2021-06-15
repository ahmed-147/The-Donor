
var usersArr=[];

try{
  var storedUsers = localStorage.getItem("Users");
  var jsonUsers = JSON.parse(storedUsers);
  if(jsonUsers==null){
    usersArr=[];
  }else{
    usersArr=jsonUsers;
  }
 
  console.log("item in json",jsonUsers); 
  }catch{
    console.log("not users in storage")
  }
 

  function saveDonater(){

    var listInputs = document.getElementsByTagName('input')
    // debugger;
    var check = false;
    for(var i=0;i<listInputs.length;i++){
    //   console.log("item is = ",listInputs[i].value)
      if(listInputs[i].value=="")
      {
        check= true;
        alert("enter all fields")
      }
    }
    if(check==false){
        if(usersArr.length>=0){
            var userId = usersArr.length;
        }else{
            var userId = 0;
        }
    
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("userPass").value;
    var userFullName = document.getElementById("userName").value;
    var userPhone = document.getElementById("phone").value;
    var userAddress = document.getElementById("address").value;
    var userBloodType = document.getElementById("bloodType").value;

    var userObj={"userId":userId,"userEmail":userEmail,"userPass":userPass,"userFullName":userFullName,
    "userPhone":userPhone,"userAddress":userAddress,"userBloodType":userBloodType}
    console.log("obj is ",userObj);
    usersArr.push(userObj);
    console.log("array is ",usersArr);
    localStorage.setItem('Users',JSON.stringify(usersArr))

    //login info
    var logedInInfo = {"logedin":true,"userId":userId,"userFullName":userFullName,"userBloodType":userBloodType}
    localStorage.setItem("logedInInfo",JSON.stringify(logedInInfo))
    window.open("home.html","_self")
    }

   

   


  }

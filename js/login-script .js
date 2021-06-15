
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
      // console.log("item is = ",listInputs[i].value)
      if(listInputs[i].value=="")
      {
        check= true;
        alert("enter all fields")
      }
    }
    if(check==false){
      var userEmail = document.getElementById("email").value;
      var userPass = document.getElementById("userPass").value;
      var loginUser = usersArr.filter(function(e){
        return (e.userEmail === userEmail&& e.userPass===userPass)
      })

      if(loginUser.length == 0){
        alert('you not registerd')
      }else{
        console.log('user login is',loginUser)
       
        var userId= loginUser[0]["userId"]
        var userFullName= loginUser[0]["userFullName"]
        var userBloodType=loginUser[0]["userBloodType"]
       
        var logedInInfo = {"logedin":true,"userId":userId,"userFullName":userFullName,"userBloodType":userBloodType}
        localStorage.setItem("logedInInfo",JSON.stringify(logedInInfo))
       window.open("home.html","_self")
      }
    
    
    }else{
      alert('you not registerd')
    }

  

   


  }

function logOutfun(){
    var logedInInfoformLocalStorage = localStorage.getItem("logedInInfo");
    var logedInInfo = JSON.parse(logedInInfoformLocalStorage);
    logedInInfo.userId = 0;
    logedInInfo.userFullName = "";
    logedInInfo.userBloodType = "";
    logedInInfo.logedin = false;

    localStorage.setItem("logedInInfo",JSON.stringify(logedInInfo))
        
   

}
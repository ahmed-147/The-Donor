var logedInInfoformLocalStorage = localStorage.getItem("logedInInfo");
var logedInInfo = JSON.parse(logedInInfoformLocalStorage);
console.log(logedInInfo.logedin) 
if(logedInInfo.logedin == true){
    $("#navWithOutLogin").hide();
    $("#navWithLogin").show();
    $('#logOutDisplay').show();
    
}else{
    $("#navWithOutLogin").show();
    $('#logOutDisplay').hide();
    $("#navWithLogin").hide();
}
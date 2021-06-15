
/*******product */

var jsonBloodRequest =[{
    "requestId" : 1,
    "applicantName" : "Ahmed sayed Ali",
    "applicantPhone" : "01017145852",
    "applicantAddress":"Assuit",
    "requestStatus" : false,
    "requestBloodType":"A+",
    "bagsNum": 2
},
{
    "requestId" : 2,
    "applicantName" : "Ali mahmoud Ali",
    "applicantPhone" : "01018145753",
    "applicantAddress":"Assuit",
    "requestStatus" : false,
    "requestBloodType":"O-",
    "bagsNum": 2
},
{
    "requestId" : 3,
    "applicantName" : "mohamed khaled ahmed",
    "applicantPhone" : "01017145822",
    "applicantAddress":"Assuit",
    "requestStatus" : false,
    "requestBloodType":"AB+",
    "bagsNum": 2
},
{
    "requestId" : 4,
    "applicantName" : "mostafa ahmed sayed",
    "applicantPhone" : "01017245862",
    "applicantAddress":"Assuit",
    "requestStatus" : false,
    "requestBloodType":"B+",
    "bagsNum": 2
},
]



///////// user/////////////////
var jsonUsers = [{
    "userId": 1,
    "userEmail": "af123456@gmail.com",
    "userPass": "Ahmedf123456",
    "userFullName": "Ahmed Fathi",
    "userPhone": "01014152585",
    "userAddress": "Assuit",
    "userBloodType":"O-"
   
},
{
    "userId": 2,
    "userEmail": "am123456@gmail.com",
    "userPass": "Abanoubm123456",
    "userFullName": "Abanoub Mounir",
    "userPhone": "01014152585",
    "userAddress": "Assuit",
    "userBloodType":"A+"
},
{
    "userId": 3,
    "userEmail": "hr123456@gmail.com",
    "userPass": "Hassanr123456",
    "userFullName": "Ahmed Fathi",
    "userPhone": "01014152585",
    "userAddress": "Assuit",
    "userBloodType":"O-"
}
]


////login
var logedInInfo = {

    logedin: false,
    userId: 0,
    userFullName: "",
    userBloodType:""
    
}

//-----store logedIn info -----
/*****blood Request */

var JSONBloodRequestToSTR = JSON.stringify(jsonBloodRequest);
if (localStorage.getItem("bloodRequests") == null) {
    localStorage.setItem("bloodRequests", JSONBloodRequestToSTR);
}

/****users registration */
var JSONUsertoSTR = JSON.stringify(jsonUsers);
if(localStorage.getItem("Users") == null)
{
    localStorage.setItem("Users", JSONUsertoSTR);
}

////*****login  */
var JSONLogedInInfoToSTR = JSON.stringify(logedInInfo);
if(localStorage.getItem("logedInInfo") == null)
{
    localStorage.setItem("logedInInfo", JSONLogedInInfoToSTR);

}






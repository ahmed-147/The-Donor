function showRequest() {
    var bloodTypeTakeform_O_m = ["O-", "O+", "A+", "A-", "B+", "B-", "AB+", "AB-"];
    var bloodTypeTakeform_O_p = ["O+", "A+", "B+", "AB+"];
    var bloodTypeTakeform_A_p = ["A+", "AB+"];
    var bloodTypeTakeform_A_m = ["A+", "A-", "AB+", "AB-"];
    var bloodTypeTakeform_B_p = ["B+", "AB+"];
    var bloodTypeTakeform_B_m = ["B+", "B-", "AB+", "AB-"];
    var bloodTypeTakeform_AB_p = ["AB+"];
    var bloodTypeTakeform_AB_m = ["AB-"];
    var bloodTypeTakeformUser = [];

    var logedInInfoformLocalStorage = localStorage.getItem("logedInInfo");
    var logedInInfo = JSON.parse(logedInInfoformLocalStorage);
    switch (logedInInfo.userBloodType) {
        case "O-": { bloodTypeTakeformUser = bloodTypeTakeform_O_m; } break;
        case "O+": bloodTypeTakeformUser = bloodTypeTakeform_O_p; break;
        case "A+": bloodTypeTakeformUser = bloodTypeTakeform_A_p; break;
        case "A-": bloodTypeTakeformUser = bloodTypeTakeform_A_m; break;
        case "B-": bloodTypeTakeformUser = bloodTypeTakeform_B_m; break;
        case "B+": bloodTypeTakeformUser = bloodTypeTakeform_B_p; break;
        case "AB+": bloodTypeTakeformUser = bloodTypeTakeform_AB_m; break;
        case "AB-": bloodTypeTakeformUser = bloodTypeTakeform_AB_p; break;
    };



    var showRequest = document.getElementById("showrequests");
    var bloodRequestsfromLocalStorage = localStorage.getItem("bloodRequests");
    var bloodRequests = JSON.parse(bloodRequestsfromLocalStorage);
    var tableRows = showRequest.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    console.log(bloodRequests[bloodRequests.length - 1].requestId + 1)

    for (var x = rowCount - 1; x > 0; x--) {
        showRequest.removeChild(tableRows[x]);
    }

    for (const request of bloodRequests) {
        var exist = false;
        bloodTypeTakeformUser.forEach(element => {

            if (request.requestBloodType == element && request.requestStatus == false) {
                exist = true;
            }

        });
        if (exist) {
            // creates a table row
            var row = document.createElement("tr");
            for (var propt in request) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                var cell = document.createElement("td");
                var cellText = document.createTextNode(request[propt]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            //Create actions
            var cell = document.createElement("td");
            //../createUser/createUser.html?ID='+user['ID']
            cell.innerHTML = '<button class="btn btn-info" onclick="Donate(' + request['requestId'] + ')" >Donate</button>'

            row.appendChild(cell);

            // add the row to the end of the table 
            showRequest.appendChild(row);
        }

    }
}
showRequest();
setInterval(function () {
    showRequest();
}, 3000);

function Donate(ID) {
    var bloodRequestsfromLocalStorage = localStorage.getItem("bloodRequests");
    var bloodRequests = JSON.parse(bloodRequestsfromLocalStorage);

    for (const key in bloodRequests) {
        if (bloodRequests[key].requestId == ID) {
            bloodRequests[key].requestStatus = true;
        }
    }
    console.log(bloodRequests);
    localStorage.setItem("bloodRequests", JSON.stringify(bloodRequests));
}

function Create() {
    
        if ($('#applicantName').val() != null) {
            if (document.getElementById('applicantPhone').value != null) {
                if (document.getElementById('applicantAddress').value != null) {
                    if (document.getElementById('requestBloodType').value != null) {
                        if (document.getElementById('bagsNum').value != null) {
                            var bloodRequestsfromLocalStorage = localStorage.getItem("bloodRequests");
                            
                            var bloodRequests = JSON.parse(bloodRequestsfromLocalStorage);
                            console.log(bloodRequests)
                            var id = bloodRequests[bloodRequests.length - 1].requestId + 1;
                            NewRequest = {
                                "requestId": id,
                                "applicantName": document.getElementById('applicantName').value,
                                "applicantPhone": document.getElementById('applicantPhone').value,
                                "applicantAddress": document.getElementById('applicantAddress').value,
                                "requestStatus": false,
                                "requestBloodType": document.getElementById('requestBloodType').value.toUpperCase(),
                                "bagsNum": document.getElementById('bagsNum').value
                            }
                            bloodRequests.push(NewRequest);
                            
                            localStorage.setItem("bloodRequests", JSON.stringify(bloodRequests));
                            window.open("home.html","_self");
                            
                        }

                    }

                }
            }
        
        // var bloodRequestsfromLocalStorage = localStorage.getItem("bloodRequests");

        // var bloodRequests = JSON.parse(bloodRequestsfromLocalStorage);

        // var id = bloodRequests[bloodRequests.length - 1].requestId + 1;
        // NewRequest = {
        //     "requestId": id,
        //     "applicantName": $('#applicantName').val(),
        //     "applicantPhone": document.getElementById('applicantPhone').value,
        //     "applicantAddress": document.getElementById('applicantAddress').value,
        //     "requestStatus": false,
        //     "requestBloodType": document.getElementById('requestBloodType').value,
        //     "bagsNum": document.getElementById('bagsNum').value
        // }
        // bloodRequests.push(NewRequest);
        // console.log(bloodRequests);
        // localStorage.setItem("bloodRequests", JSON.stringify(bloodRequests));
        // window.location.href = 'BloodRٌٌequests.html';
    }
}
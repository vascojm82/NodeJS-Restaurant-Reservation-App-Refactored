$(document).ready(function(){
            let port = 3000, 
                url = `http://localhost:${port}/api/reserve`;

            $(".submit").click(function(event){
                event.preventDefault();

                // Get the form data
                var newReservation = {
                name: $("#reserve-name").val().trim(),
                phone: $("#reserve-phone").val().trim(),
                email: $("#reserve-email").val().trim(),
                };

                $.ajax({
                url: url,
                method: "POST",
                data: newReservation
                })
                .then(function(data) {
                    console.log(data);
                    if (data.isWaiting) {
                    alert("Sorry you are on the wait list");
                    } else {
                    alert("Yay! You are officially booked!");
                    }

                    // Clear the form when submitting
                    $("#reserve-name").val("");
                    $("#reserve-phone").val("");
                    $("#reserve-email").val("");
                });
            });
        });
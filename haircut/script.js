
    var form = document.getElementById("appointment-form");
    var formInputs = document.querySelectorAll("#appointment-form input");
  
    
  
    // Submit form event listener
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // Pause animation while form is being submitted
      // Simulate form submission (replace with actual implementation)
      setTimeout(function () {
        // Show success message
        var messageDiv = document.getElementById("message");
        messageDiv.innerHTML = "Appointment booked successfully!";
        messageDiv.style.color = "red";
        // Clear form fields
        form.reset();
        // Resume animation after form submission is complete
      }, 1000); // Simulate server response time
    });
    // Pause animation when any form input is focused

var get_appointment = document.getElementById('getappointment')
get_appointment.style.display="none"
function getappoint(){
    get_appointment.style.display="block"
}

function close_appointment(){
    get_appointment.style.display="none"

}
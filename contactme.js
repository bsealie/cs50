document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#submit").addEventListener("click", function(event){
    event.preventDefault(); // Prevent form submission

    // Get input values
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let message = document.querySelector("#message").value.trim();

    // Simple validation: check if any field is empty
    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Email format validation using regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If all checks pass
    alert("Your message has been sent!");
    document.querySelector("form").reset();
  });
});

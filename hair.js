document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    
    document.querySelectorAll(".error-message").forEach(el => el.innerText = "");

    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    }

    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, "Invalid email format");
        isValid = false;
    }

    
    if (message.value.trim() === "") {
        showError(message, "Message is required");
        isValid = false;
    }

    if (isValid) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }
});

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.innerText = message;
}

    //   ---------------------------------------------------------------------------->
   
   
   
   
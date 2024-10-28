// script.js

function handleFormSubmit(event) {
    event.preventDefault();

    // Collect form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if email format is correct (basic regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Log the data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Display success message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = "Your message has been successfully submitted!";
    successMessage.style.display = "block";

    // Clear the form
    document.getElementById('contactForm').reset();
}

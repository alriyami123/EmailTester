function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    const userEmail = document.getElementById('email').value; // Get user email
    const templateParams = {
        to_email: userEmail, // User's email
        from_email: userEmail, // Set the sender email to the user's email
        message: document.getElementById('message').value, // User's message
    };

    emailjs.send('Test', 'template_x0uf336', templateParams)
        .then(function(response) {
            showConfirmationMessage();
        }, function(error) {
            alert('Error sending email: ' + JSON.stringify(error));
        });
}

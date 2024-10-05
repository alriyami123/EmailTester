function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    const userEmail = document.getElementById('email').value; // Get user email
    const messageContent = document.getElementById('message').value; // Get user's message

    const templateParams = {
        to_email: userEmail,    // User's email (recipient)
        from_email: userEmail,  // User's email (sender)
        message: messageContent, // User's message
    };

    emailjs.send('Test', 'template_x0uf336', templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response);
            showConfirmationMessage();
        }, function(error) {
            console.error('Error sending email:', error);
            alert('Error sending email: ' + JSON.stringify(error));
        });
}

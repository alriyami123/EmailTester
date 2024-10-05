function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    const userEmail = document.getElementById('email').value; // Get the user's email
    const messageContent = document.getElementById('message').value; // Get the user's message

    // Check if values are captured correctly
    console.log("User Email:", userEmail);
    console.log("Message Content:", messageContent);

    const templateParams = {
        to_email: userEmail,    // User's email (recipient)
        from_email: userEmail,  // User's email (sender)
        message: messageContent, // User's message
        reply_to: userEmail,    // Set the reply-to field
    };

    // Send email
    emailjs.send('Test', 'template_k1k0dm1', templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response);
            showConfirmationMessage(); // Call to show success message
        }, function(error) {
            console.error('Error sending email:', error);
            alert('Error sending email: ' + JSON.stringify(error));
        });
}

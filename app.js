let isSending = false; // Flag to check if an email is being sent

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    // Prevent sending if already sending
    if (isSending) {
        alert("Please wait 30 seconds before sending another message.");
        return;
    }

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

    // Set sending flag to true and disable the button
    isSending = true;
    const sendButton = document.getElementById('send-button');
    sendButton.disabled = true;

    // Send email
    emailjs.send('Test', 'template_k1k0dm1', templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response);
            showConfirmationMessage(); // Call to show success message
            
            // Re-enable the button after 30 seconds
            setTimeout(() => {
                isSending = false; // Reset the sending flag
                sendButton.disabled = false; // Re-enable the button
            }, 30000); // 30000 milliseconds = 30 seconds

        }, function(error) {
            console.error('Error sending email:', error);
            alert('Error sending email: ' + JSON.stringify(error));
            isSending = false; // Reset the flag on error
            sendButton.disabled = false; // Re-enable the button on error
        });
}

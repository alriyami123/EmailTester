function sendEmail(event) {
  event.preventDefault(); // Prevent form submission

  const templateParams = {
      to_email: document.getElementById('email').value, // User's email
      message: document.getElementById('message').value, // User's message
  };

  emailjs.send('Test', 'template_x0uf336', templateParams)
      .then(function(response) {
          showConfirmationMessage();
      }, function(error) {
          alert('Error sending email: ' + JSON.stringify(error));
      });
}

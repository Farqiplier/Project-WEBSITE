document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const formData = new FormData(this);
    const data = new URLSearchParams(formData);
  
    console.log('Sending data:', data.toString()); // Log the data being sent
  
    fetch('/.netlify/functions/submit_form', {
      method: 'POST',
      body: data,
    })
    .then(response => {
      console.log('Response status:', response.status); // Log the response status
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(result => {
      console.log('Success:', result); // Log the success message
      document.getElementById('success-message').style.display = 'block';
      setTimeout(() => {
        document.getElementById('success-message').style.display = 'none';
      }, 3000);
    })
    .catch(error => {
      console.error('Error:', error); // Log the error
      document.getElementById('error-message').style.display = 'block';
      setTimeout(() => {
        document.getElementById('error-message').style.display = 'none';
      }, 3000);
    });
  });
  
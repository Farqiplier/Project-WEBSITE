document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded and DOM fully loaded.');

  const form = document.getElementById('contact-form');
  if (!form) {
    console.error('Form with ID "contact-form" not found.');
    return;
  }

  console.log('Form found. Adding event listener.');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form submission intercepted.');

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
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
          successMessage.style.display = 'block';
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 3000);
        } else {
          console.error('Success message element not found.');
        }
      })
      .catch(error => {
        console.error('Error:', error); // Log the error
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
          errorMessage.style.display = 'block';
          setTimeout(() => {
            errorMessage.style.display = 'none';
          }, 3000);
        } else {
          console.error('Error message element not found.');
        }
      });
  });
});
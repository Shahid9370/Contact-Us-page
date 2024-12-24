document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    let isValid = true;
  
    // Helper function to set error message
    function setErrorMessage(field, message) {
      const errorElement = document.getElementById(`${field.id}Error`);
      if (message) {
        errorElement.textContent = message;
        errorElement.classList.add('visible');
        isValid = false;
      } else {
        errorElement.textContent = '';
        errorElement.classList.remove('visible');
      }
    }
  
    // Name Validation
    const nameField = document.getElementById('name');
    const nameValue = nameField.value.trim();
    if (nameValue === '') {
      setErrorMessage(nameField, 'Name is required.');
    } else if (/\d/.test(nameValue)) {
      setErrorMessage(nameField, 'Name cannot contain numbers.');
    } else {
      setErrorMessage(nameField, '');
    }
  
    // Email Validation
    const emailField = document.getElementById('email');
    const emailValue = emailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrorMessage(emailField, emailRegex.test(emailValue) ? '' : 'Enter a valid email address.');
  
    // Phone Number Validation
    const phoneField = document.getElementById('phone');
    const phoneValue = phoneField.value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    setErrorMessage(phoneField, phoneRegex.test(phoneValue) ? '' : 'Enter a valid 10-digit phone number.');
  
    // Message Validation
    const messageField = document.getElementById('message');
    const messageValue = messageField.value.trim();
    if (messageValue === '') {
      setErrorMessage(messageField, 'Message is required.');
    } else if (messageValue.length < 5) {
      setErrorMessage(messageField, 'Message should be at least 5 characters long.');
    } else {
      setErrorMessage(messageField, '');
    }
  
    // Terms Checkbox Validation
    const termsField = document.getElementById('terms');
    setErrorMessage(termsField, termsField.checked ? '' : 'You must agree to the terms and conditions.');
  
    // If all validations pass
    if (isValid) {
      alert('Form submitted successfully!');
      this.reset();
    }
  });  
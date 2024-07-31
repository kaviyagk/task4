document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signUpForm');
    const successMessage = document.getElementById('successMessage');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
  
      // Display success message
      successMessage.style.display = 'block';
  
      // Redirect to home screen after 2 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
        $('#signUpModal').modal('hide');
        window.location.href = 'index.html'; // Change 'home.html' to your actual home screen URL
      }, 1000);
    });
  });
  
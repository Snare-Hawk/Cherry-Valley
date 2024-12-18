// newsletter form

document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz80zeA42GzU2d-eKbz7vl8lKIK0dMSfoVHDssJPI6Y-V67Fbq4rvPx-bx9HDSuK8J-/exec';
    const form = document.getElementById('newsletter-form');
    const confirmation = document.getElementById('confirmation');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
  
      fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
          if (response.ok) {
            form.reset();
            confirmation.style.display = 'block';
          } else {
            alert('Error: Submission failed');
          }
        })
        .catch(error => console.error('Error!', error.message));
    });
  });
  
  
  
  
  
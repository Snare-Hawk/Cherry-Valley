// form for membership

document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxYelCfpIe9_X_1sf5NdjApIol0OqGP20vX7n0YeN-nlF2-aCUvBcDqoXcMNuIDepM/exec'; // Replace with your new Google Apps Script URL
    const form = document.getElementById('member-form');
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
  
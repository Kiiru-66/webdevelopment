// JavaScript for form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  
  // Display success message
  alert("Thank you for reaching out! We will get back to you shortly.");
  
  // Reset the form
  this.reset();
});

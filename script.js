// script.js
function getFormvalue() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  // Display the first and last name using alert
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

// Attach the getFormvalue function to the form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
  getFormvalue();
});

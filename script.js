// JavaScript for validation
const form = document.querySelector('form[name="registration-form"]');

form.addEventListener('submit', function(event) {
    const fullName = document.getElementById('full-name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value.trim();
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!fullName || !mobile || !email || !state || !city || !age || !gender) {
        alert('Please fill in all required fields.');
        event.preventDefault();
        return;
    }

    // Additional basic validations if needed
    // Form will proceed to Netlify if all fields are filled
});
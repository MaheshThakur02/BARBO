// Function to toggle between Sign In and Sign Up forms
function toggleForm(formType) {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');

    if (formType === 'sign-in') {
        signInForm.classList.remove('hidden');
        signUpForm.classList.add('hidden');
        signInBtn.classList.add('active');
        signUpBtn.classList.remove('active');
    } else if (formType === 'sign-up') {
        signUpForm.classList.remove('hidden');
        signInForm.classList.add('hidden');
        signUpBtn.classList.add('active');
        signInBtn.classList.remove('active');
    }
}

// Function to get user location with spinner animation
document.getElementById('getLocationBtn').addEventListener('click', function() {
    const locationOutput = document.getElementById('locationOutput');
    const spinner = document.getElementById('spinner');

    locationOutput.textContent = '';
    spinner.classList.remove('hidden'); // Show the spinner while fetching location

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            locationOutput.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            spinner.classList.add('hidden'); // Hide the spinner once location is retrieved
        }, function(error) {
            locationOutput.textContent = "Unable to retrieve your location.";
            spinner.classList.add('hidden'); // Hide the spinner on error
        });
    } else {
        locationOutput.textContent = "Geolocation is not supported by your browser.";
        spinner.classList.add('hidden'); // Hide the spinner if geolocation is unsupported
    }
});

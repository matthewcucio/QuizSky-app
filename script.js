// Store name and redirect to choose.html
function storeNameAndRedirect() {
    const name = document.getElementById('username').value.trim();
    if (name) {
        localStorage.setItem('userName', name);
        window.location.href = 'choose.html';
    } else {
        alert('Please enter your name!');
    }
}

// Personalize the welcome message in choose.html
function personalizeWelcome() {
    const userName = localStorage.getItem('userName');
    const welcomeMessage = document.getElementById('welcome-message');
    if (userName) {
        welcomeMessage.textContent = `Welcome, ${userName}!`;
    } else {
        welcomeMessage.textContent = 'Welcome! Please enter your name on the homepage.';
    }
}

// Redirect to specific quiz page
function redirectTo(subjectUrl) {
    window.location.href = subjectUrl;
}

// Run personalization when choose.html loads
if (document.title === 'Choose a Subject') {
    window.onload = personalizeWelcome;
}

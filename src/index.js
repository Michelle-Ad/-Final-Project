document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = 'Welcome to our Plant Shop! We\'re delighted to see you here.';
    displayWelcomeMessage(welcomeMessage);
});

function displayWelcomeMessage(message) {
    const welcomeElement = document.getElementById('welcome-message');
    welcomeElement.textContent = message;
}
// Function to handle all the actions on page load
window.onload = function() {
    // Dark mode toggle functionality
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check if dark mode was previously enabled from localStorage
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.innerText = 'Light Mode'; // Update button text accordingly
    }

    // Add event listener for dark mode toggle
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.innerText = 'Light Mode'; // Change button text
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.innerText = 'Dark Mode'; // Change button text
        }
    });

    // Dynamic greeting prompt on homepage only
    const currentPath = window.location.pathname;
    if (currentPath === '/index.html' || currentPath === '/') {
        const now = new Date();
        const hours = now.getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good morning! Welcome to Brianna Mensah's portfolio!";
        } else if (hours < 18) {
            greeting = "Good afternoon! Thanks for stopping by my portfolio!";
        } else {
            greeting = "Good evening! I'm excited to share my work with you!";
        }

        alert(greeting); // Display the greeting
    }
};

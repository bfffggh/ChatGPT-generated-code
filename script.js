document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var sidebar = document.querySelector('.sidebar');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('hidden');
    });

    // Add touchstart event for mobile devices
    toggleButton.addEventListener('touchstart', function (event) {
        event.preventDefault(); // Prevent the default touch behavior (e.g., scrolling)
        sidebar.classList.toggle('hidden');
    });
});


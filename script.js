document.addEventListener('DOMContentLoaded', () => {
    // Toggle navigation menu on small screens
    const toggleBtn = document.querySelector('.toggle-btn');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle book cover clicks
    const bookCovers = document.querySelectorAll('.book-cover');

    bookCovers.forEach((cover) => {
        cover.addEventListener('click', () => {
            const pdfUrl = cover.getAttribute('data-pdf');
            if (pdfUrl) {
                window.open(pdfUrl, '_blank');
            }
        });
    });
});
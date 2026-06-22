document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.endsWith('/') ? 'index.html' : currentPath.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    const statusText = document.getElementById('page-status');

    navLinks.forEach((link) => {
        const linkHref = link.getAttribute('href') || '';
        const isCurrentPage = linkHref === currentFile || (currentFile === 'index.html' && linkHref === './');
        link.classList.toggle('active', isCurrentPage);
    });

    if (statusText) {
        statusText.textContent = `You are viewing ${currentFile.replace('.html', '')} page.`;
    }

    const highlightButton = document.getElementById('highlight-team-btn');
    const cards = document.querySelectorAll('.card');

    if (highlightButton && cards.length) {
        highlightButton.addEventListener('click', () => {
            const isActive = highlightButton.classList.toggle('is-active');

            cards.forEach((card) => {
                card.classList.toggle('is-highlighted', isActive);
            });

            highlightButton.textContent = isActive ? 'Clear Highlight' : 'Highlight Team';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // hide the loader after 1 second
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none';
        }
    }, 1000);
});
document.addEventListener('DOMContentLoaded', () => {
    // options for intersection observer
    const observerOptions = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // observe elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

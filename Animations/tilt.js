document.addEventListener('DOMContentLoaded', () => {
    // initialize vanilla tilt for 3d cards
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // initialize particles.js for background
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 30, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": ["#39b54a", "#00a0d2", "#ffc20e"] },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true, "distance": 150, "color": "#00a0d2", "opacity": 0.2, "width": 1
                },
                "move": {
                    "enable": true, "speed": 1.5, "direction": "none", "out_mode": "out"
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" } },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.6, "color": "#39b54a" } } }
            }
        });
    }
});

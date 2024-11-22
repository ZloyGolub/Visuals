function NightModeOn() {
    document.body.classList.toggle("night-mode");
    document.querySelector("header").classList.toggle("night-mode");
    document.querySelector("footer").classList.toggle("night-mode");
    document.querySelector("#toggle-mode").classList.toggle("night-mode");
    // Toggle link styles
    document.querySelectorAll("a").forEach((link) => {
        link.classList.toggle("night-mode");
    });
}

document.getElementById("toggle-mode").addEventListener("click", () => {
    NightModeOn();    
});

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkMode){
    NightModeOn();
}

// smooth scrolling
// Easing Function (easeInOutCubic)
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Smooth Scroll Function
function smoothScroll(target, duration = 800) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top - 80;
    const startTime = performance.now();

    function animation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ensure progress doesn't exceed 1
        const ease = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + targetPosition * ease);

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// Apply Smooth Scrolling to Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        smoothScroll(targetId, 1400); // Scroll duration in ms
    });
});

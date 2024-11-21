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

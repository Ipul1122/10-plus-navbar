// Mengatur dark mode

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
});

// Mengatur toggle navbar untuk responsive

const menuToggle = document.getElementById("menuToggle");
const navLink = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () =>{
    navLink.style.display = navLink.style.display === "flex" ? "none" : "flex";
});
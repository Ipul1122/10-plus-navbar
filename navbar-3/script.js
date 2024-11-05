// script.js

function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    const toggle = document.getElementById('navbar-toggle');
    
    menu.classList.toggle('active'); // Toggle menu
    toggle.classList.toggle('active'); // Toggle kelas pada hamburger
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); // Tambahkan kelas saat discroll
    } else {
        navbar.classList.remove('scrolled'); // Hapus kelas saat kembali ke atas
    }
});

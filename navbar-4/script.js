const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const searchInput = document.getElementById('searchInput');
const productGrid = document.getElementById('productGrid');
const noResults = document.getElementById('noResults'); 

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});


//untuk input pencarian
searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase(); 
    const cards = productGrid.getElementsByClassName('card');

    let hasResults = false; 

    // Menyembunyikan atau menampilkan kartu berdasarkan input pencarian
    for (let i = 0; i < cards.length; i++) {
        const cardName = cards[i].getAttribute('data-name').toLowerCase(); 
        if (cardName.includes(filter)) {
            cards[i].style.display = ''; 
            hasResults = true;
        } else {
            cards[i].style.display = 'none'; 
        }
    }

    // Menampilkan atau menyembunyikan pesan tidak ditemukan
    noResults.style.display = hasResults ? 'none' : 'block';
});


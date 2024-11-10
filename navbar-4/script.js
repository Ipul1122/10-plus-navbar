const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// pencarian produk
// Mendapatkan elemen input dan grid produk
const searchInput = document.getElementById('searchInput');
const productGrid = document.getElementById('productGrid');

// Menambahkan event listener untuk input pencarian
searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase(); // Mengambil nilai input dan mengubahnya menjadi huruf kecil
    const cards = productGrid.getElementsByClassName('card'); // Mengambil semua elemen kartu

    // Menyembunyikan atau menampilkan kartu berdasarkan input pencarian
    for (let i = 0; i < cards.length; i++) {
        const cardName = cards[i].getAttribute('data-name').toLowerCase(); // Mengambil nama produk dari atribut data
        if (cardName.includes(filter)) {
            cards[i].style.display = ''; // Menampilkan kartu jika nama produk cocok
        } else {
            cards[i].style.display = 'none'; // Menyembunyikan kartu jika tidak cocok
        }
    }
});
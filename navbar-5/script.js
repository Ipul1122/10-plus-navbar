// Function to toggle dark mode and icon
function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById('toggle-mode');
    
    // Toggle dark mode class on body
    body.classList.toggle('dark-mode');
    
    // Change icon based on the current mode
    if (body.classList.contains('dark-mode')) {
      toggleButton.textContent = '🌙'; 
    } else {
      toggleButton.textContent = '☀️'; 
    }
  }
  
  // Function to update the time in WIB
  function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('en-GB', options);
    timeElement.textContent = timeString;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
// Toggle menu display
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  }
  
  // Close menu when clicking outside of it
  document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    
    // Cek apakah klik terjadi di luar menu dan tombol hamburger
    if (menu.classList.contains('active') && !menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.classList.remove('active');
    }
  });

  

//   CARD ADZAN
const prayerTimes = [
  { time: "04:20", id: "subuh" },
  { time: "11:40", id: "dzuhur" },
  { time: "15:00", id: "ashar" },
  { time: "17:50", id: "maghrib" },
  { time: "18:50", id: "isya" },
];

// Fungsi untuk memeriksa waktu dan memainkan suara
function checkPrayerTime() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentSecond = now.getSeconds(); 

  // Loop untuk setiap waktu adzan
  prayerTimes.forEach(prayer => {
    const [hour, minute] = prayer.time.split(":").map(Number); // Pecah waktu menjadi jam dan menit

    // Jika waktu sekarang sudah mendekati waktu adzan (detik = 0)
    if (currentHour === hour && currentMinute === minute && currentSecond === 0) {
      const adhanSound = document.getElementById('adhan-sound');
      const notification = document.getElementById('adhan-notification');
      const adhanTimeText = document.getElementById('adhan-time-text');

      // Update teks notifikasi
      adhanTimeText.textContent = `Adzan ${prayer.id} akan berkumandang pada ${prayer.time}`;

      // Tampilkan notifikasi
      notification.style.display = 'block';

      // Fungsi untuk memutar adzan ketika tombol "Dengarkan Adzan" diklik
      document.getElementById('play-adhan-btn').onclick = function () {
        adhanSound.muted = false;  // Pastikan suara tidak dimute
        adhanSound.play().catch(error => {
          console.error("Audio tidak dapat diputar:", error);
        });
      };

      // Fungsi untuk menutup notifikasi
      document.getElementById('close-adhan-btn').onclick = function () {
        notification.style.display = 'none';
      };

      console.log(`${prayer.id} time!`);
    }
  });
}

// Menunggu sampai detik 0 untuk memeriksa waktu
function startAdzanCheck() {
  const now = new Date();
  const currentSecond = now.getSeconds();
  
  // Hitung sisa detik untuk mencapai detik 0
  const timeToWait = 1000 * (60 - currentSecond); 

  // Set timeout untuk memeriksa waktu ketika detik 0
  setTimeout(() => {
    checkPrayerTime();  
    setInterval(checkPrayerTime, 60000);  
  }, timeToWait);
}

// Jalankan startAdzanCheck saat halaman dimuat
window.addEventListener('load', () => {
  // Mulai memeriksa waktu adzan pada detik 0
  startAdzanCheck();
});

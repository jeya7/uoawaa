// === JAM REAL TIME ===
function updateClock() {
  const now = new Date();
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const day = days[now.getDay()];
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock").textContent = `${day}, ${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// === HITUNG MUNDUR MENUJU TANGGAL PERNIKAHAN ===
const weddingDate = new Date("2025-10-25T20:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById("countdown").textContent = "Selamat Menempuh Hidup Baru 💖";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent =
    `Menuju Hari Bahagia: ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
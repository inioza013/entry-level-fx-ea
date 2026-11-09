// Entry Level FX EA — shared website interactions
const WHATSAPP_NUMBER = "62895328696545";

function waLink(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
}

const mainWa = document.getElementById("mainWhatsApp");
if (mainWa) {
  mainWa.href = waLink("Halo Entry Level FX EA, saya ingin konsultasi mengenai EA Rental, Custom EA Development, atau VPS Assistance.");
}

document.querySelectorAll('[data-wa="product"]').forEach((el) => {
  el.href = waLink("Halo Entry Level FX EA, saya ingin konsultasi dan melakukan pemesanan rental XAUUSDc AUTO DUAL PENDING GRID V2.1. Mohon informasi prosedur aktivasi, kompatibilitas akun/broker, instalasi, dan dukungan teknis. Pilihan durasi: 1 bulan Rp249.000 / 3 bulan Rp649.000 / 6 bulan Rp1.099.000 / 1 tahun Rp1.899.000.");
});

const form = document.getElementById("briefForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const value = (key) => (data.get(key) || "").toString().trim() || "-";
    const message = [
      "Halo Entry Level FX EA, saya ingin konsultasi Custom EA.",
      "",
      "DATA KONSULTASI",
      "Nama: " + value("name"),
      "Paket diminati: " + value("package"),
      "Platform: " + value("platform"),
      "Instrumen: " + value("symbol"),
      "Timeframe: " + value("timeframe"),
      "Jenis strategi: " + value("strategy"),
      "",
      "SPESIFIKASI STRATEGI",
      "Aturan entry: " + value("entry"),
      "Aturan exit: " + value("exit"),
      "Lot / manajemen risiko: " + value("risk"),
      "Maksimal posisi / layer: " + value("positions"),
      "Fitur tambahan: " + value("features"),
      "Catatan / referensi: " + value("details"),
      "",
      "Mohon bantu analisis ruang lingkup, paket, estimasi biaya, dan waktu pengerjaan. Terima kasih."
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener");
  });
}

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
if (menuToggle && nav) {
  const closeMenu = () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
    menuToggle.textContent = "☰";
  };
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-wa="vps-byo"]').forEach((el) => {
  el.href = waLink("Halo Entry Level FX EA, saya sudah memiliki VPS sendiri dan ingin konsultasi bantuan instalasi MT5 serta EA. Mohon informasi persyaratan, biaya instalasi, dan jadwal pengerjaan.");
});
document.querySelectorAll('[data-wa="vps-managed"]').forEach((el) => {
  el.href = waLink("Halo Entry Level FX EA, saya ingin mengajukan layanan Managed VPS untuk menjalankan EA MT5. Mohon informasi ketersediaan, spesifikasi server, biaya VPS dan pengelolaan, serta prosedur pemesanan.");
});

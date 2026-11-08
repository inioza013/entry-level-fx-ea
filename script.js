// Entry Level FX EA — Phase 1 static catalog website
// Update this number to the official WhatsApp Business number (country code, digits only).
// Example Indonesia: 6281234567890
const WHATSAPP_NUMBER = "6289532869545";

function waLink(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const mainWa = document.getElementById("mainWhatsApp");
if (mainWa) {
  mainWa.href = waLink("Halo Entry Level FX EA, saya ingin konsultasi mengenai rental EA / custom EA.");
}

document.querySelectorAll('[data-wa="product"]').forEach((el) => {
  el.href = waLink("Halo Entry Level FX EA, saya ingin menanyakan status dan informasi XAUUSDc AUTO DUAL PENDING GRID V2.1.");
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
      `Nama: ${value("name")}`,
      `Paket diminati: ${value("package")}`,
      `Platform: ${value("platform")}`,
      `Instrumen: ${value("symbol")}`,
      `Timeframe: ${value("timeframe")}`,
      `Jenis strategi: ${value("strategy")}`,
      "",
      "SPESIFIKASI STRATEGI",
      `Aturan entry: ${value("entry")}`,
      `Aturan exit: ${value("exit")}`,
      `Lot / manajemen risiko: ${value("risk")}`,
      `Maksimal posisi / layer: ${value("positions")}`,
      `Fitur tambahan: ${value("features")}`,
      `Catatan / referensi: ${value("details")}`,
      "",
      "Mohon bantu analisis ruang lingkup, paket, estimasi biaya, dan waktu pengerjaan. Terima kasih."
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener");
  });
}

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

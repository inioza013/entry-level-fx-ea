// Entry Level FX EA — Phase 1 static catalog website
// Update this number to the official WhatsApp Business number (country code, digits only).
// Example Indonesia: 6281234567890
const WHATSAPP_NUMBER = "62895328696545";

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
    const message = [
      "Halo Entry Level FX EA, saya ingin konsultasi Custom EA.",
      "",
      `Nama: ${data.get("name")}`,
      `Platform: ${data.get("platform")}`,
      `Instrumen: ${data.get("symbol") || "-"}`,
      `Strategi: ${data.get("strategy")}`,
      "",
      "Detail strategi:",
      data.get("details"),
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

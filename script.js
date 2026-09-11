/* ========================================
   PKKMB 2026 - JAVASCRIPT
   ======================================== */

/* ---------- CONFIG ---------- */
const CONFIG = {
  // GANTI nomor ini dengan nomor WA panitia untuk pendaftaran Unjuk Bakat.
  nomorPanitiaUnjukBakat: "6281365528505"
};

/* ---------- MOBILE NAV ---------- */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => navMenu.classList.toggle("active"));
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("active"));
  });
}

/* ---------- GROUP SEARCH ---------- */
const searchInput = document.getElementById("groupSearch");
const groupCards = document.querySelectorAll(".group-card");
const groupEmpty = document.getElementById("groupEmpty");
if (searchInput && groupCards.length) {
  searchInput.addEventListener("input", function () {
    const keyword = this.value.trim().toLowerCase();
    let found = 0;
    groupCards.forEach(card => {
      const match = card.innerText.toLowerCase().includes(keyword);
      card.style.display = match ? "block" : "none";
      if (match) found++;
    });
    if (groupEmpty) groupEmpty.style.display = found ? "none" : "block";
  });
}

/* ---------- COPY CAPTION ---------- */
document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copy);
    if (!target) return;
    const text = target.innerText.trim();
    try {
      await navigator.clipboard.writeText(text);
      const old = button.innerText;
      button.innerText = "✓ Caption Tersalin";
      setTimeout(() => button.innerText = old, 1800);
    } catch (error) {
      alert("Caption belum bisa disalin otomatis. Silakan blok dan salin teksnya.");
    }
  });
});

/* ---------- TALENT MODAL ---------- */
const talentModal = document.getElementById("talentModal");
function openTalentForm() {
  if (!talentModal) return;
  talentModal.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeTalentForm() {
  if (!talentModal) return;
  talentModal.classList.remove("show");
  document.body.style.overflow = "";
}
if (talentModal) {
  talentModal.addEventListener("click", event => {
    if (event.target === talentModal) closeTalentForm();
  });
}

const talentForm = document.getElementById("talentForm");
if (talentForm) {
  talentForm.addEventListener("submit", event => {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const prodi = document.getElementById("prodi").value.trim();
    const kelompok = document.getElementById("kelompokForm").value.trim();
    const waPeserta = document.getElementById("waPeserta").value.trim();
    const bakat = document.getElementById("bakat").value;
    const judul = document.getElementById("judul").value.trim();
    const deskripsi = document.getElementById("deskripsi").value.trim();

    const pesan = `Halo Panitia PKKMB 2026 👋🏻

Saya ingin mendaftarkan diri untuk Unjuk Bakat.

Nama: ${nama}
NIM: ${nim}
Program Studi: ${prodi}
Kelompok: ${kelompok}
No. WhatsApp: ${waPeserta}
Jenis Bakat: ${bakat}
Judul Penampilan: ${judul}

Deskripsi Penampilan:
${deskripsi}

Terima kasih! ✨`;

    const url = `https://wa.me/${CONFIG.nomorPanitiaUnjukBakat}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank", "noopener");
    talentForm.reset();
    closeTalentForm();
  });
}

/* ---------- PIN DOWNLOADS ---------- */
// PIN sudah disediakan panitia sebagai file PNG dan diunduh langsung dari index.html.

/* ---------- DRESS CODE DATE SWITCHER ---------- */
const dateButtons = document.querySelectorAll(".date-switcher button");
const dcPanels = document.querySelectorAll(".dc-panel");
function activateDressCode(id, scroll = false) {
  const target = document.getElementById(id);
  if (!target) return;
  dateButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.target === id));
  dcPanels.forEach(panel => panel.classList.toggle("active", panel.id === id));
  history.replaceState(null, "", `#${id}`);
  if (scroll) document.querySelector(".detail-content")?.scrollIntoView({behavior:"smooth", block:"start"});
}
if (dateButtons.length) {
  dateButtons.forEach(button => button.addEventListener("click", () => activateDressCode(button.dataset.target, true)));
  const hash = window.location.hash.replace("#", "");
  activateDressCode(document.getElementById(hash) ? hash : "dc14");
}

/* ---------- ESC ---------- */
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeTalentForm();
    closePinModal();
  }
});

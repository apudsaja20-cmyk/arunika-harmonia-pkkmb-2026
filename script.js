/* ========================================
   MOBILE NAVBAR
======================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Tutup menu setelah klik */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ========================================
   GROUP SEARCH
======================================== */

const searchInput = document.getElementById("groupSearch");
const groupCards = document.querySelectorAll(".group-card");

searchInput.addEventListener("input", function () {

    const keyword = this.value.toLowerCase();

    groupCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(keyword)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

});


/* ========================================
   TALENT MODAL
======================================== */

const talentModal = document.getElementById("talentModal");


function openTalentForm() {

    talentModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeTalentForm() {

    talentModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* Klik area luar modal */

talentModal.addEventListener("click", function(event) {

    if (event.target === talentModal) {

        closeTalentForm();

    }

});


/* ESC untuk tutup */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeTalentForm();

    }

});


/* ========================================
   FORM UNJUK BAKAT → WHATSAPP
======================================== */

const talentForm = document.getElementById("talentForm");


talentForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const nama =
        document.getElementById("nama").value;

    const kelompok =
        document.getElementById("kelompok").value;

    const bakat =
        document.getElementById("bakat").value;

    const deskripsi =
        document.getElementById("deskripsi").value;


    /*
       GANTI NOMOR DI BAWAH
       Format:
       628xxxxxxxxxx

       Jangan pakai + atau spasi.
    */

    const nomorPanitia = "6281234567890";


    const pesan =

`Halo Panitia PKKMB 2026 👋🏻

Saya ingin mendaftarkan diri untuk Unjuk Bakat.

Nama: ${nama}
Kelompok: ${kelompok}
Jenis Bakat: ${bakat}

Deskripsi Penampilan:
${deskripsi}

Terima kasih! ✨`;


    const whatsappURL =
        `https://wa.me/${nomorPanitia}?text=${encodeURIComponent(pesan)}`;


    window.open(
        whatsappURL,
        "_blank"
    );


    talentForm.reset();

    closeTalentForm();

});
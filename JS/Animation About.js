// Ambil elemen yang mau dianimasikan
const aboutContent = document.querySelector('.about-content');
const leftPalette = document.querySelector('#left-pallete');
const rightPalette = document.querySelector('#right-pallete');

// Buat observer untuk ngecek kapan About kelihatan di layar
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Jika elemen terlihat, tampilkan animasi
      aboutContent.classList.add('show');
      leftPalette.classList.add('show');
      rightPalette.classList.add('show');
    } else {
      // Jika elemen tidak terlihat (scroll kembali ke atas), sembunyikan animasi
      aboutContent.classList.remove('show');
      leftPalette.classList.remove('show');
      rightPalette.classList.remove('show');
    }
  });
}, {
  threshold: 0.3 // Muncul saat 30% bagian About masuk layar
});

// Mulai observer untuk about-section
const aboutSection = document.querySelector('#about');
observer.observe(aboutSection);

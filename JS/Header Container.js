window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-container');
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); // Menambahkan class 'scrolled' saat scroll
    } else {
        header.classList.remove('scrolled'); // Menghapus class 'scrolled' saat di atas
    }
});

// Highlight link yang aktif berdasarkan URL
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      if (link.href === currentLocation) {
        link.classList.add('active');
      }
    });
  });
  
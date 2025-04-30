// Animasi saat scroll untuk What's New
const whatsNewSection = document.querySelector('.whats-new-content');

function checkWhatsNew() {
    const sectionTop = whatsNewSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight * 0.8) {
        whatsNewSection.classList.add('active');
    } else {
        whatsNewSection.classList.remove('active');
    }
}

window.addEventListener('scroll', checkWhatsNew);


const hiddenElements = document.querySelectorAll('.hidden-right');

function handleScroll() {
  hiddenElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show-right');
    } else {
      el.classList.remove('show-right');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // agar langsung aktif saat reload


function copyEmail() {
    // Email yang ingin disalin
    var email = "mcf.entertainment.official@gmail.com";
    
    // Membuat elemen textarea sementara untuk menyalin email
    var tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = email;
    tempInput.select();
    document.execCommand('copy');
    
    // Menghapus elemen textarea sementara
    document.body.removeChild(tempInput);
    
    // Ubah teks tombol menjadi "Copied"
    var button = document.querySelector('.email-button');
    button.textContent = 'Copied';
    
    // Kembalikan teks tombol ke semula setelah 2 detik
    setTimeout(function() {
        button.textContent = 'Copy Our Email';
    }, 2000);
}

// Ambil elemen navbar
const navbar = document.querySelector("nav");

    // Tambahkan event listener pada window untuk mendeteksi scroll
  // Add active class to navbar on scroll
window.onscroll = function() {
  var navbar = document.querySelector('nav');
  if (window.scrollY > 10) {
    navbar.classList.add('active', 'nav-blur');
  } else {
    navbar.classList.remove('active', 'nav-blur');
  }
};
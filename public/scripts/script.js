// Header on scroll //
const header = document.querySelector('header')
window.onscroll = function () {
  if (window.scrollY > 20) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}
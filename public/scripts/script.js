// Header on scroll //
const header = document.querySelector('header')
window.onscroll = function () {
  if (window.scrollY > 20) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

const filterButton = document.querySelector('#filter-button')
const userFilters = document.querySelector('.user-filters')
filterButton.addEventListener('click', showFilters)
function showFilters () {
  userFilters.classList.toggle('showfilters')
}
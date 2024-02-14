// Header on scroll //
const header = document.querySelector('header')
window.onscroll = function () {
  if (window.scrollY > 20) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

// Filter Menu //
const menuButton = document.querySelector('#menu-button')
const menu = document.querySelector('.menu')
menuButton.addEventListener('click', showMenu)
function showMenu () {
  menu.classList.toggle('showmenu')
}

// Lightswitch Start Animation //
const startPage = document.querySelector('.start-page'),
      lightSwitch = document.querySelector('.button-before')
lightSwitch.addEventListener('click', startAnimation)
function startAnimation () {
  lightSwitch.classList.toggle('toggleSwitchAnimation')
  setTimeout(startDissapearing, 500)
  startDissapearing
}
function startDissapearing () {
  startPage.classList.toggle('hideStartPageAnimation')
}

// Cursor Light //
const positionCursor = document.documentElement;
positionCursor.addEventListener('mousemove', e =>{
  positionCursor.style.setProperty('--x', e.clientX + 'px')
  positionCursor.style.setProperty('--y', e.clientY + 'px')
})
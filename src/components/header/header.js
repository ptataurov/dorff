const header = document.querySelector('.header')
const toggleNav = header.querySelector('.header__toggle-nav')

toggleNav.addEventListener('click', function() {
  header.classList.toggle('header--nav-show')
})

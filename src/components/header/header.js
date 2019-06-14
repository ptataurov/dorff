// Common components imports
import '../../components/search-panel/search-panel'

const header = document.querySelector('.header')
const toggleNav = header.querySelector('.header__toggle-nav')

toggleNav.addEventListener('click', function() {
  header.classList.toggle('header--nav-show')
})

const body = document.querySelector('body')
const searchPanel = header.querySelector('.search-panel')
const btnSearch = header.querySelector('.header__bar-search')

btnSearch.addEventListener('click', () => {
  searchPanel.classList.toggle('search-panel--show')

  body.classList.toggle('darken')
  body.classList.toggle('fixed')
  header.classList.toggle('header--search-open')
})

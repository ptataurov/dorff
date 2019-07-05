// Common components imports
import '../../components/search-panel/search-panel'

import $ from 'jquery'

const header = document.querySelector('.header')
const toggleNav = header.querySelector('.header__toggle-nav')

toggleNav.addEventListener('click', function() {
  $searchPanel.hide()

  body.classList.remove('darken')
  body.classList.remove('fixed')
  header.classList.remove('header--search-open')

  $('.header__nav').slideToggle()
  header.classList.toggle('header--nav-show')
})

const body = document.querySelector('body')
const $searchPanel = $('.search-panel')

const btnSearch = header.querySelector('.header__bar-search')

btnSearch.addEventListener('click', () => {
  header.querySelector('.header__nav').style.display = null
  header.classList.remove('header--nav-show')
  $searchPanel.slideToggle()

  body.classList.toggle('darken')
  body.classList.toggle('fixed')
  header.classList.toggle('header--search-open')
})

window.addEventListener('resize', () => {
  header.querySelector('.header__nav').style.display = null
  header.classList.remove('header--nav-show')
})

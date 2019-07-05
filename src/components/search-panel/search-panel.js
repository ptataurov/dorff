const header = document.querySelector('.header')
const searchPanel = document.querySelector('.search-panel')

searchPanel.style.top = `${header.offsetHeight}px`

window.addEventListener('resize', () => {
  searchPanel.style.top = `${header.offsetHeight}px`
})

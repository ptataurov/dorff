const slider = document.querySelector('.product__slider')

const thumbs = slider.querySelectorAll('.product__thumb-img')

const img = slider.querySelector('.product__img')

for (const thumb of thumbs) {
  thumb.addEventListener('click', () => {
    if (img.src !== thumb.src) {
      img.src = thumb.src
    }
  })
}

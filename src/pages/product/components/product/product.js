const slider = document.querySelector('.product__slider')
const thumbs = slider.querySelectorAll('.product__thumb')
const img = slider.querySelector('.product__img')

for (const thumb of thumbs) {
  thumb.addEventListener('click', function() {
    const imgNode = thumb.querySelector('.product__thumb-img')

    if (
      !thumb.classList.contains('product__thumb--active') &&
      img.src !== imgNode.src
    ) {
      thumbs.forEach(node => {
        node !== thumb && node.classList.remove('product__thumb--active')
      })
      img.src = imgNode.src
      this.classList.add('product__thumb--active')
    }
  })
}

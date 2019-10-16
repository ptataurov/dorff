const slider = document.querySelector('.banner-slider')
const slides = slider.querySelectorAll('.banner-slider__slide-img')
const dots = slider.querySelectorAll('.banner-slider__dot')
const btnPrev = slider.querySelector('.banner-slider__btn-prev')
const btnNext = slider.querySelector('.banner-slider__btn-next')
const titleContainer = slider.querySelector('.banner-slider__title')
const textContainer = slider.querySelector('.banner-slider__para')

const getTitle = node => node.dataset.title
const getText = node => node.dataset.text

const isFirstSlide = idx => idx === 0
const isLastSlide = idx => idx === slides.length - 1

let activeIdx = 0

const switchDisabledClass = () => {
	isFirstSlide(activeIdx) &&
		btnPrev.classList.add('banner-slider__btn-prev--disabled')

	!isFirstSlide(activeIdx) &&
		btnPrev.classList.remove('banner-slider__btn-prev--disabled')

	isLastSlide(activeIdx) &&
		btnNext.classList.add('banner-slider__btn-next--disabled')

	!isLastSlide(activeIdx) &&
		btnNext.classList.remove('banner-slider__btn-next--disabled')
}

btnNext.addEventListener('click', () => {
	if (isLastSlide(activeIdx)) {
		return false
	}

	slides[activeIdx].classList.remove('banner-slider__slide-img--show')

	dots[activeIdx].classList.remove('banner-slider__dot--active')

	const newSlide = slides[++activeIdx]

	titleContainer.textContent = getTitle(newSlide)
	textContainer.textContent = getText(newSlide)

	slides[activeIdx].classList.add('banner-slider__slide-img--show')

	dots[activeIdx].classList.add('banner-slider__dot--active')

	switchDisabledClass()
})

btnPrev.addEventListener('click', () => {
	if (isFirstSlide(activeIdx)) {
		return false
	}

	slides[activeIdx].classList.remove('banner-slider__slide-img--show')
	dots[activeIdx].classList.remove('banner-slider__dot--active')

	const newSlide = slides[--activeIdx]

	titleContainer.textContent = getTitle(newSlide)
	textContainer.textContent = getText(newSlide)

	slides[activeIdx].classList.add('banner-slider__slide-img--show')
	dots[activeIdx].classList.add('banner-slider__dot--active')

	switchDisabledClass()
})

for (let i = 0; i <= dots.length - 1; i++) {
	dots[i].addEventListener('click', () => {
		if (i === activeIdx) {
			return false
		}

		slides[activeIdx].classList.remove('banner-slider__slide-img--show')
		dots[activeIdx].classList.remove('banner-slider__dot--active')

		const newSlide = slides[(activeIdx = i)]

		titleContainer.textContent = getTitle(newSlide)
		textContainer.textContent = getText(newSlide)

		slides[activeIdx].classList.add('banner-slider__slide-img--show')
		dots[activeIdx].classList.add('banner-slider__dot--active')

		switchDisabledClass()
	})
}

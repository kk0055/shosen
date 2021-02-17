const body = document.querySelector('.img-box')
const slides = document.querySelectorAll('.slide')
const rightBtn = document.getElementById('right')

const slidesPlan = document.querySelectorAll('.slide-planifolia')
const rightBtnForPlan = document.getElementById('right2')



let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

 
  setActiveSlide()

})

rightBtnForPlan.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slidesPlan.length - 1) {
    activeSlide = 0
  }

  setActiveSlideForPlan()

})

//Groumet
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}

//Planifolia
function setActiveSlideForPlan() {
  slidesPlan.forEach((slide) => slide.classList.remove('active'))

  slidesPlan[activeSlide].classList.add('active')
}
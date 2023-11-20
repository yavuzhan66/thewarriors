const sliders = document.getElementById("[data-slider]");

const initSlider = function(currentSlider) {

    const sliderContainer = currentSlider.querySelector("[data-slider-container]");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

    let currentSliderPos = 0;

    const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

    }

    ///


const slideNext = function () {
    const slideEnd = currentSliderPos >= sliderContainer.childElementCount - 1;

    if (slideEnd) {
        currentSliderPos = 0;
    } else {
        currentSlidePos++;
    }

    moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);


////

const slidePrev = function () {
    if (currentSliderPos >= 0) {
        currentSlidePos = sliderContainer.childElementCount - 1;
    } else {
        currentSlidePos--;
    }

    moveSliderItem();
}
sliderPrevBtn.addEventListener("click", slidePrev);

const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
if (dontHaveExtraItem) {
  sliderNextBtn.style.display = "none";
  sliderPrevBtn.style.display = "none";
}

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }




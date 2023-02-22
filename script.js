const sliderValue = document.querySelector(".slider-value span"),
inputSlider = document.querySelector(".field input");

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    sliderValue.innerText = value;
    const min = inputSlider.min;
    const max = inputSlider.max;
    sliderValue.style.left = (value - min) * 100 / (max - min) + "%" ;      
    sliderValue.classList.add("show");
});

inputSlider.onblur = (() => {
    sliderValue.classList.remove("show");
});

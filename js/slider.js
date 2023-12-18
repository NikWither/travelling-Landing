const sliderImages = document.querySelectorAll(".card_item"); // список с картинками
const sliderLine = document.querySelector(".slider__liner"); // вся наша лента со слайдерами
const sliderDotc = document.querySelectorAll(".slider__dot");

let sliderCount = 0; // счетчик по слайдерам
let sliderWidth; // ширина картинки для адаптива

/* Функции */

// все эти вещи сделаны на адаптивность

window.addEventListener("resize", showSlide); // прослушка событий на каждое изменение размера

function showSlide() {
  sliderWidth = document.querySelector(".slider").offsetWidth; // берем числовое значение размера картинки (без пикселей)
  sliderLine.style.width = sliderWidth * sliderImages.length + "px";
  sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));

  rollSlider();
}

showSlide();

// функции пролистывания вперед и назад

// вперёд
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
  }
  rollSlider();
  thisSlide(sliderCount);
}

// назад
function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1; // на последний слайд
  }

  rollSlider();
  thisSlide(sliderCount);
}

// переключение, уже сам roll слайдера

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает, какой слайд по счёту активен

function thisSlide(index) {
  sliderDotc.forEach((item) => item.classList.remove("active-dot"));
  sliderDotc[index].classList.add("active-dot");
}

sliderDotc.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});

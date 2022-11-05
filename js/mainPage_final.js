// 슬라이드 이미지들 선택자
const $slides = document.querySelectorAll(".slide");

// 현재 보이는 슬라이드 index값
let current = 0;

// 자동 슬라이드 기능

const reset = () => {
  $slides.forEach((slide) => {
    slide.style.display = "none";
  })
};

const autoSlide = () => {
  reset();
  if (current === $slides.length - 1) {
    current = -1;
  }
  current++;
  $slides[current].style.display = "block";
};

let loopInterval = setInterval(() => {
    autoSlide();
}, 3000);


  
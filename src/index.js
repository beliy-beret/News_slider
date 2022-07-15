import "./styles.scss";

const slideList = document.querySelectorAll(".slide");
const navBtn = document.querySelectorAll("button");
const range = document.querySelector(".range__percent");

document.addEventListener("DOMContentLoaded", function() {
  setRangeWidth(slideList.length);
});

function addActiveClass(item) {
  item.classList.add("active");
}

function deleteActiveClass() {
  slideList.forEach((item) => item.classList.remove("active"));
}

function getActiveIndex() {
  for (let index = 0; index < slideList.length; index++) {
    if (slideList[index].classList.contains("active")) {
      return index;
    }
  }
}

function setRangeWidth(slideQuantity) {
  const activeSlide = getActiveIndex() + 1;
  range.style.width = `${(activeSlide * 100) / slideQuantity}%`;
}

function prevSlide() {
  let activeIndex = getActiveIndex();
  if (activeIndex > 0) {
    deleteActiveClass();
    addActiveClass(slideList[activeIndex - 1]);
  } else {
    activeIndex = slideList.length - 1;
    deleteActiveClass();
    addActiveClass(slideList[activeIndex]);
  }
  setRangeWidth(slideList.length);
}

function nextSlide() {
  let activeIndex = getActiveIndex();
  if (activeIndex < slideList.length - 1) {
    deleteActiveClass();
    addActiveClass(slideList[activeIndex + 1]);
  } else {
    activeIndex = 0;
    deleteActiveClass();
    addActiveClass(slideList[activeIndex]);
  }
  setRangeWidth(slideList.length);
}

for (const btn of navBtn) {
  if (btn.classList.contains("prev")) {
    btn.addEventListener("click", prevSlide);
  }
  if (btn.classList.contains("next")) {
    btn.addEventListener("click", nextSlide);
  }
}

for (let slide of slideList) {
  slide.addEventListener("click", () => {
    deleteActiveClass();
    addActiveClass(slide);
    setRangeWidth(slideList.length);
  });
}

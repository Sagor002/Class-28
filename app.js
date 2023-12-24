"use strict"

// const targetEl = document.querySelector(".target");

// // intersection observer
// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.5,
// };

// const callback = (entries) => {
//   const entry = entries[0]

//   if(entry.isIntersecting){
//   // console.log("entrrsecting");
//   targetEl.textContent = "I am entering into the twon!"
//   }else{
//     targetEl.textContent = "I am leaving into the twon!"
//   }
// };

// const observer = new IntersectionObserver(callback, options);

// observer.observe(targetEl);

// const sectionThree = document.querySelector(".section__three");
// const header = document.querySelector(".header");

// const observer = new IntersectionObserver((entries) => {
//   const entry = entries[0];

//   if (entry.isIntersecting) {
//   header.classList.add("sticky");
//   }else{
//     header.classList.remove("sticky");
//   }

// },
// {
//   root: null,
//   rootMargin: "0px",
//   threshold:0.1,
// }
// );

// observer.observe(sectionThree);
const slides = document.querySelector(".slides");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let currIndex = 0;

const showSlide = (index) => {
  slides.style.transform = `translateX(-${index * 100}vw)`;
};

const nextSlide = () => {
  if (currIndex < slides.children.length - 1) {
    currIndex++;
    showSlide(currIndex);
  } else {
    currIndex = 0;
    showSlide(currIndex);
  }
};

const prevSlide = () => {
  if (currIndex > 0) {
    currIndex--;
    showSlide(currIndex);
  } else {
    currIndex = slides.children.length - 1;
    showSlide(currIndex);
  }
};

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);



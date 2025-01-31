"use strict";

const body = document.body;
const slides = document.querySelectorAll(".slide");
const larrow = document.querySelector(".arrow-left");
const rarrow = document.querySelector(".arrow-right");

let activeslide = 1

function setbgImage(){
  body.style.backgroundImage = slides[activeslide].style.backgroundImage
}

function setActiveSlide(){
  slides.forEach((slide)=>{
    slide.classList.remove("active")
 } )
  slides[activeslide].classList.add("active")
}

setbgImage();
setActiveSlide();


rarrow.addEventListener('click',()=>{
console.log('1');

  activeslide++;
  if(activeslide >= slides.length){
    activeslide == 0;
  }
  setbgImage();
  setActiveSlide()
})

larrow.addEventListener("click",()=>{
  activeslide--;
  if(activeslide < 0){
    activeslide = slides.length-1;
  }
  setbgImage()
  setActiveSlide()
})
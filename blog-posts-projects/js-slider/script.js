var allSlides = document.getElementsByClassName("slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  allSlides[currentSlide].className = "slide";
  if (currentSlide == allSlides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  allSlides[currentSlide].className = "slide show";
}

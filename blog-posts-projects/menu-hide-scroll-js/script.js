let menu = document.getElementById("menu");
var prevScrollY = window.scrollY;

window.onscroll = function () {
  var currentScrollY = window.scrollY;
  if (prevScrollY > currentScrollY) {
    menu.style.top = "0";
  } else {
    menu.style.top = "-3.25rem";
  }
  prevScrollY = currentScrollY;
};

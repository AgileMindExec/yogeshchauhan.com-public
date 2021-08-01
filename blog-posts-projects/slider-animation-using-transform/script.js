const inner = document.querySelector(".inner");
const blog = document.querySelector(".blog");

inner.classList.add("left");

setInterval(skew, 1000);
setInterval(displayText, 2000);

function skew() {
  inner.classList.remove("left");
  inner.classList.add("right");
}

function displayText() {
  blog.style.opacity = "1";
}

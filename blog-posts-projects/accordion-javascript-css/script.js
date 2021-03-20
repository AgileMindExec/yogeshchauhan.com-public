var allAccordions = document.querySelectorAll(".acc");

allAccordions.forEach(function (item, index) {
  allAccordions[index].addEventListener("click", function () {
    var accContents = this.nextElementSibling;
    if (accContents.style.opacity === "1") {
      accContents.style.opacity = "0";
      accContents.style.height = "0px";
    } else {
      accContents.style.opacity = "1";
      accContents.style.height = "100px";
    }
  });
});

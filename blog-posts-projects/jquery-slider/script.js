$("#slides").children().hide();
$("#slides div:nth-child(1)").show();

var i = 1;
var allChildren = $("#slides").children().length;

setInterval(function () {
  $("#slides div:nth-child(" + i + ")").hide();
  i++;
  if (i == allChildren + 1) {
    i = 1;
  }
  $("#slides div:nth-child(" + i + ")").show();
}, 2000);

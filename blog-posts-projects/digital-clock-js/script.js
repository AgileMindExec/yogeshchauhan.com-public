function clock() {
  //get the time in current hour, minute and second
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  // https://www.yogeshchauhan.com/if-statement-shorthand-examples-in-javascript/#The-Conditional-Operator
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  //set those values in our HTML elements
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = minute;
  document.getElementById("sec").innerHTML = second;

  //update the clock every second
  setTimeout(function () {
    clock();
  }, 1000);
}

clock();

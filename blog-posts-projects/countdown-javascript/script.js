function startCountdown() {
  //get the values
  var cdate = document.getElementById("cdate").value;
  var ctime = document.getElementById("ctime").value;

  //set the complete date using those variables
  var countdownDatetime = new Date(cdate + " " + ctime).getTime();

  //this will change the countdown every second
  var countdownFunction = setInterval(function () {
    // get current date and time
    var now = new Date().getTime();

    // Find the difference between current datetime and the count down datetime
    var diff = countdownDatetime - now;

    //let's convert that in days, hours, minutes and seconds
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    //display that to the countdown p tag
    document.getElementById("showCountdown").innerHTML =
      "<b>Countdown:</b> " +
      days +
      " days " +
      hours +
      " hours " +
      minutes +
      " minutes " +
      seconds +
      " seconds ";

    //id the difference is less than 0 then show the error
    if (diff < 0) {
      clearInterval(countdownFunction);
      document.getElementById("showCountdown").innerHTML =
        "PAST DATE AND/OR TIME";
    }
  }, 1000);
}

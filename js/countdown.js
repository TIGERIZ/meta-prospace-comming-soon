// Set the date we're counting down to
var countDownDate = new Date("Mar 13, 2024 08:30:00").getTime(); 

// Update the count down every 1 second
var x = setInterval(function () {
  // Get the current time
  const date = new Date();
  console.log(date);
  const now = date.getTime();
  console.log(now);
  console.log(countDownDate);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  console.log(distance);
  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerHTML = days.toString().length < 2 ? "0"+days.toString(): days.toString();
  document.getElementById("hours").innerHTML = hours.toString().length < 2 ? "0"+hours.toString(): hours.toString();
  document.getElementById("minutes").innerHTML = minutes.toString().length < 2 ? "0"+minutes.toString(): minutes.toString();
  document.getElementById("seconds").innerHTML = seconds.toString().length < 2 ? "0"+seconds.toString(): seconds.toString();

  // If the count down is finished, display text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

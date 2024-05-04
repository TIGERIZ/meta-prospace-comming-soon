// Get today's date
var today = new Date();

// Set the target time to stop the countdown today at 6:35 PM
var stopTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0).getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get the current time
  const now = new Date().getTime();

  // Check if the current time has passed the stop time
  if (now >= stopTime) {
    clearInterval(x); // Stop the countdown
    document.getElementById("timer").innerHTML = ` has launched successfully`;
    document.getElementById("cong").innerHTML = `<img src="/assets/cong.gif" alt="cong"/>`;
    document.getElementById("launching-after").style.display = "none";
    document.getElementById("non-working").style.display = "none";
    return; // Exit the function
  }

  // Find the remaining time
  var distance = stopTime - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);



  // Display the remaining time
  document.getElementById("days").innerHTML = days.toString().length < 2 ? "0" + days.toString() : days.toString();
  document.getElementById("hours").innerHTML = hours.toString().length < 2 ? "0" + hours.toString() : hours.toString();
  document.getElementById("minutes").innerHTML = minutes.toString().length < 2 ? "0" + minutes.toString() : minutes.toString();
  document.getElementById("seconds").innerHTML = seconds.toString().length < 2 ? "0" + seconds.toString() : seconds.toString();
}, 1000);

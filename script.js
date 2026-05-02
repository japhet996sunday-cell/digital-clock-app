// ===== GET CLOCK ELEMENT =====
let clock = document.getElementById("clock");

// ===== FUNCTION TO UPDATE TIME =====
function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // add leading zero if needed
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  // display time
  clock.textContent = hours + ":" + minutes + ":" + seconds;
}

// initial call so it doesn't wait 1 second
updateClock();

// update every second
setInterval(updateClock, 1000);

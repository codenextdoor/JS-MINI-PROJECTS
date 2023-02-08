const hourEl = document.getElementById("hour");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  hourEl.innerText = h;
  minsEl.innerText = m;
  secsEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

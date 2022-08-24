
function dateClock() {
  const newDate = new Date();
  
  let hours = ((newDate.getHours() + newDate.getMinutes() / 60) / 12) * 360;
  let minutes = (newDate.getMinutes() / 60) * 360;
  let seconds =
    ((newDate.getSeconds() + newDate.getMilliseconds() / 1000) / 60) * 360;

  document.querySelector(".hour").style.transform = `rotate(${hours}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minutes}deg)`;
  document.querySelector(".second").style.transform = `rotate(${seconds}deg)`;
}

setInterval(() => {
  dateClock();
}, 1000);

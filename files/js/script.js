// script for functionality on the entire site, epic1!!!!

function Clock() {
  const today = new Date();
  let h = today.hours();
  let m = today.minutes();
  let s = today.seconds();
  m = getTime(m);
  s = getTime(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function getTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
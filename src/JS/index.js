function runClock() {
  var now = new Date();

  hour = now.getHours() % 12; //format de 12 ore, nu de 24
  minutes = now.getMinutes();
  seconds = now.getSeconds();
  milliSeconds = now.getMilliseconds();

  var clock = document.querySelector('div.clock');
  var hourLine = clock.querySelector('div.line-hour');
  var minutesLine = clock.querySelector('div.line-minutes');
  var secondsLine = clock.querySelector('div.line-seconds');

  var hourRotation = 30 * hour + (30 / 60) * minutes; //30 de grade la fieacare ora --> intr o ora sunt 60 minute
  var minutesRotation = 6 * minutes + (6 / 60) * seconds; //6 grade la fiecare minut (360/60(60 sec un minut)) --> + in 6 minute sunt 60 sec
  var secondsRotation = 6 * seconds + 0.006 * milliSeconds; //6 grade la fiecare secunda (360de grade / 60) --> o secunda are 1000 de milisecunde 6/1000

  hourLine.style.transform = 'rotate(' + hourRotation + 'deg)';
  minutesLine.style.transform = 'rotate(' + minutesRotation + 'deg)';
  secondsLine.style.transform = 'rotate(' + secondsRotation + 'deg)';

  requestAnimationFrame(runClock);
}
window.onload = runClock();

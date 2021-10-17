const daysHTML = document.querySelector('span[data-value="days"]');
const hoursHTML = document.querySelector('span[data-value="hours"]');
const minsHTML = document.querySelector('span[data-value="mins"]');
const secsHTML = document.querySelector('span[data-value="secs"]');
console.log(minsHTML);

const CountdownTimer = {
  selector: '#timer-1',
  targetDate: new Date('Oct 30, 2022'),
};

function getTime(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
function pad(value) {
  return String(value).padStart(2, 0);
}

setInterval(() => {
  if (
    daysHTML.textContent === 0 &&
    hoursHTML.textContent === 0 &&
    minsHTML.textContent === 0 &&
    secsHTML.textContent === 0
  ) {
    clearInterval(setInterval);
  }
  const currentTime = Date.now();
  const time = CountdownTimer.targetDate - currentTime;
  // console.log(getTime(time));

  daysHTML.textContent = getTime(time).days;
  hoursHTML.textContent = getTime(time).hours;
  minsHTML.textContent = getTime(time).mins;
  secsHTML.textContent = getTime(time).secs;
}, 1000);

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  timer = setInterval(updateChronometer, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector('.clock').textContent = '00:00:00';
}

function updateChronometer() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  let displaySeconds = seconds < 10 ? '0' + seconds : seconds;
  let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
  let displayHours = hours < 10 ? '0' + hours : hours;

  document.querySelector('.clock').textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

document.getElementById('startStop').addEventListener('click', function () {
  if (this.textContent === 'Start') {
    startTimer();
    this.textContent = 'Stop';
  } else {
    stopTimer();
    this.textContent = 'Start';
  }
});

document.getElementById('reset').addEventListener('click', function () {
  resetTimer();
});

let timerID;
let lastTimeStart = 0;
let millisTimePass = 0;
const timer = document.getElementById("timer");
const resetButton = document.getElementById("reset-button");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  // console.log("11");
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;

  lastTimeStart = Date.now();
  console.log("lastTimeStart", lastTimeStart);
  timerID = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  millisTimePass = Date.now() - lastTimeStart + millisTimePass;
  cancelAnimationFrame(timerID);
}

function resetTimer() {
  timer.textContent = "00:00:000";
  millisTimePass = 0;
  cancelAnimationFrame(timerID);
}

function updateTimer() {
  const millisPass = Date.now() - lastTimeStart + millisTimePass;
  const secondPass = millisPass / 1000;
  const minsPass = secondPass / 60;

  const millisText = formatterTime(millisPass % 1000, 3);
  const secondText = formatterTime(Math.floor(secondPass % 60), 2);
  const minsText = formatterTime(Math.floor(minsPass), 2);
  timer.textContent = `${minsText}:${secondText}:${millisText}`;
  timerID = requestAnimationFrame(updateTimer);
}

function formatterTime(number, miniLength) {
  const numberToString = String(number);
  return numberToString.padStart(miniLength, "0");
}

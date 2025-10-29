const timerLimit = 30;
const stopWatchNotification = document.getElementById(
  "stopwatch-end-notificaiton"
);
let interValID = null;

const resumeTimer = () => {
  interValID = setInterval(() => {
    const timeNow = document.getElementById("time-now");
    timeNow.innerText = `${parseInt(timeNow.innerText) + 3}`.padStart(2, 0);
    let currentTime = parseInt(timeNow.innerText);
    if (currentTime >= timerLimit) {
      clearInterval(interValID);
      interValID = null;

      stopWatchNotification.classList.remove("hidden");
    }
  }, 1000);
};

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  if (!interValID) {
    resumeTimer();
  }
});

const stopButton = document.getElementById("stop-btn");
stopButton.addEventListener("click", () => {
  clearInterval(interValID);
  interValID = null;
});

const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", () => {
  clearInterval(interValID);
  interValID = null;

  const timersCurrentTime = document.getElementById("time-now");
  timersCurrentTime.innerText = `00`;
  stopWatchNotification.classList.add("hidden");
});

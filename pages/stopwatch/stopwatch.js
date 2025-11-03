const timerLimit = 30;
const stopWatchNotification = document.getElementById(
  "stopwatch-end-notificaiton"
);
let interValID = null;

// Get button elements
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");

// Function to update button states
const updateButtonStates = (isRunning) => {
  if (isRunning) {
    startButton.classList.add("btn-disabled", "opacity-50");
    startButton.disabled = true;
    stopButton.classList.remove("btn-disabled", "opacity-50");
    stopButton.classList.add("btn-active");
    stopButton.disabled = false;
  } else {
    startButton.classList.remove("btn-disabled", "opacity-50");
    startButton.disabled = false;
    stopButton.classList.remove("btn-active");
    stopButton.classList.add("btn-disabled", "opacity-50");
    stopButton.disabled = true;
  }
};

const resumeTimer = () => {
  updateButtonStates(true);
  interValID = setInterval(() => {
    const timeNow = document.getElementById("time-now");
    timeNow.innerText = `${parseInt(timeNow.innerText) + 3}`.padStart(2, 0);
    let currentTime = parseInt(timeNow.innerText);
    if (currentTime >= timerLimit) {
      clearInterval(interValID);
      updateButtonStates(false);
      stopWatchNotification.classList.remove("hidden");
    }
  }, 1000);
};

startButton.addEventListener("click", () => {
  if (!interValID) {
    resumeTimer();
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(interValID);
  interValID = null;
  updateButtonStates(false);
});

resetButton.addEventListener("click", () => {
  clearInterval(interValID);
  interValID = null;
  updateButtonStates(false);

  const timersCurrentTime = document.getElementById("time-now");
  timersCurrentTime.innerText = `00`;
  stopWatchNotification.classList.add("hidden");
});

// Initialize button states
updateButtonStates(false);

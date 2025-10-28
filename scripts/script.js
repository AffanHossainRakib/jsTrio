const fortuneMessages = [
  "You will have a great day!",
  "Success is on the horizon.",
  "Happiness is a choice, choose wisely.",
  "Adventure awaits you.",
  "You will make a new friend soon.",
  "A surprise is in store for you.",
  "Your hard work will soon pay off.",
  "Believe in yourself and all that you are.",
  "Opportunities will come your way.",
  "You will find joy in the little things.",
];

const currentMsg = () => {
  const idx = Math.floor(Math.random() * 9);
  return fortuneMessages[idx];
};

const fortuneMessgaeParagraph = document.getElementById("fortune-message");
fortuneMessgaeParagraph.innerText = `${currentMsg()}`;

// Stopwatch functionalities
const timerLimit = 30;
let interValID = null;

const movingTimer = () =>
  (interValID = setInterval(() => {
    const timeNow = document.getElementById("time-now");
    timeNow.innerText = `${parseInt(timeNow.innerText) + 3}`.padStart(2, 0);

    let currentTime = parseInt(timeNow.innerText);
    console.log(currentTime, currentTime > timerLimit);
    if (currentTime >= timerLimit) {
      clearInterval(interValID);
      interValID = null;
    }
  }, 1000));

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  if (!interValID) {
    movingTimer();
  }
});

const stopButton = document.getElementById("stop-btn");
stopButton.addEventListener("click", () => {
  clearInterval(interValID);
  interValID = null;
});

const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", () => {
  timeNow = document.getElementById("time-now");
  timeNow.innerText = `00`;
  clearInterval(interValID);
  interValID = null;
});

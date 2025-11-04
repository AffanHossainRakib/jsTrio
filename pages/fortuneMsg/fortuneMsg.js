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
  "True wisdom comes not from knowledge, but from understanding.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Your positive attitude will lead to positive outcomes.",
  "Dream big and dare to fail.",
  "Every accomplishment starts with the decision to try.",
];

const currentMsg = () => {
  const idx = Math.floor(Math.random() * fortuneMessages.length);
  return fortuneMessages[idx];
};

// DOM Elements
const fortuneMessageParagraph = document.getElementById("fortune-message");
const fortuneBox = document.getElementById("fortune-box");
const colorBtn1 = document.getElementById("color-btn-1");
const colorBtn2 = document.getElementById("color-btn-2");
const colorBtn3 = document.getElementById("color-btn-3");
const colorBtn4 = document.getElementById("color-btn-4");
const previousMessageBtn = document.getElementById(
  "go-back-to-previous-message"
);

// Color themes with high contrast
const colorThemes = [
  {
    // Theme 1 - Red/Pink
    fontColor: "#7f1d1d",
    bgColor: "#fef2f2",
    borderColor: "#ef4444",
    fontFamily: "'Georgia', serif",
    fontSize: "2rem",
  },
  {
    // Theme 2 - Blue
    fontColor: "#1e3a8a",
    bgColor: "#dbeafe",
    borderColor: "#3b82f6",
    fontFamily: "'Trebuchet MS', sans-serif",
    fontSize: "1.75rem",
  },
  {
    // Theme 3 - Green
    fontColor: "#064e3b",
    bgColor: "#d1fae5",
    borderColor: "#10b981",
    fontFamily: "'Palatino', serif",
    fontSize: "1.875rem",
  },
  {
    // Theme 4 - Amber/Orange
    fontColor: "#78350f",
    bgColor: "#fef3c7",
    borderColor: "#f59e0b",
    fontFamily: "'Verdana', sans-serif",
    fontSize: "1.625rem",
  },
];

// Function to display fortune with animation
const displayFortune = () => {
  fortuneMessageParagraph.style.opacity = "0";
  setTimeout(() => {
    fortuneMessageParagraph.innerText = `"${currentMsg()}"`;
    fortuneMessageParagraph.style.opacity = "1";
  }, 200);
};

// Function to apply color theme
const applyTheme = (themeIndex) => {
  const theme = colorThemes[themeIndex];

  // Apply all style changes
  fortuneMessageParagraph.style.color = theme.fontColor;
  fortuneBox.style.backgroundColor = theme.bgColor;
  fortuneBox.style.borderColor = theme.borderColor;
  fortuneMessageParagraph.style.fontFamily = theme.fontFamily;
  fortuneMessageParagraph.style.fontSize = theme.fontSize;
};

const previousMessage = () => {
  const currentMsg = fortuneMessageParagraph.innerText;
  let currMsgIdx = fortuneMessages.indexOf(
    currentMsg.slice(1, currentMsg.length - 1)
  );
  const prevMsgIdx =
    (currMsgIdx + fortuneMessages.length - 1) % fortuneMessages.length;
  fortuneMessageParagraph.innerText = `"${fortuneMessages[prevMsgIdx]}"`;
};

// Display fortune only on page load/refresh
window.addEventListener("DOMContentLoaded", () => {
  displayFortune();
});

// Event Listeners for color theme buttons
colorBtn1.addEventListener("click", () => applyTheme(0));
colorBtn2.addEventListener("click", () => applyTheme(1));
colorBtn3.addEventListener("click", () => applyTheme(2));
colorBtn4.addEventListener("click", () => applyTheme(3));
previousMessageBtn.addEventListener("click", () => previousMessage());

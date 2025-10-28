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

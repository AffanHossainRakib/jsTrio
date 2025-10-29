const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(taskForm);
  const taskHeading = formData.get("task-heading");
  const taskDetails = formData.get("task-details");
  addToLocalStorage(taskHeading, taskDetails);
});

const addToLocalStorage = (heading, details) => {
  const currToDoList = getFromLocalStorage();
  currData = {
    isDone: false,
    taskHeading: heading,
    taskDetails: details,
  };
  currToDoList.unshift(currData);
  localStorage.setItem("toDoList", JSON.stringify(currToDoList));
};

const getFromLocalStorage = () => {
  let currToDoList = localStorage.getItem("toDoList");
  if (!currToDoList) {
    localStorage.setItem("toDoList", JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("toDoList"));
};

console.log(getFromLocalStorage());

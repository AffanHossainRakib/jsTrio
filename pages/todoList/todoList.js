const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(taskForm);
  const taskHeading = formData.get("task-heading");
  const taskDetails = formData.get("task-details");
});

const addToLocalStorage = (heading, details) => {
  console.log(heading, details);
};

const getFromLocalStorage = () => {
  const toDoList = localStorage.getItem("toDoList");
  if (!toDoList) {
    localStorage.setItem("toDoList", "");
  }

  console.log(localStorage.getItem("toDoList"));
};

getFromLocalStorage();

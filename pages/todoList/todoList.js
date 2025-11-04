const taskForm = document.getElementById("task-form");
const editTaskForm = document.getElementById("edit-task-form");
const tasksContainer = document.getElementById("tasks-container");
const emptyState = document.getElementById("empty-state");
const modalToggle = document.getElementById("my_modal_7");
const editModalToggle = document.getElementById("my_modal_70");

// Get tasks from localStorage
const getFromLocalStorage = () => {
  let currToDoList = localStorage.getItem("toDoList");
  if (!currToDoList) {
    localStorage.setItem("toDoList", JSON.stringify([]));
    return [];
  }
  return JSON.parse(currToDoList);
};

// Save tasks to localStorage
const saveToLocalStorage = (tasks) => {
  localStorage.setItem("toDoList", JSON.stringify(tasks));
};

// Add task to localStorage
const addToLocalStorage = (heading, details) => {
  const currToDoList = getFromLocalStorage();
  const newTask = {
    id: Date.now(), // Unique ID based on timestamp
    isDone: false,
    taskHeading: heading,
    taskDetails: details,
  };
  currToDoList.unshift(newTask);
  saveToLocalStorage(currToDoList);
  renderTasks();
};

// Toggle task completion status with animation
const toggleTaskStatus = (taskId) => {
  const tasks = getFromLocalStorage();
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].isDone = !tasks[taskIndex].isDone;
    saveToLocalStorage(tasks);

    // Animate the checkbox change
    const taskCard = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskCard) {
      taskCard.style.transform = "scale(0.95)";
      setTimeout(() => {
        taskCard.style.transform = "scale(1)";
        renderTasks();
      }, 150);
    } else {
      renderTasks();
    }
  }
};

// Edit task
const editTask = (taskId) => {
  const tasks = getFromLocalStorage();
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    editModalToggle.checked = true;

    editTaskForm.addEventListener("submit", (e) => {
      const formData = new FormData(editTaskForm);
      const taskHeading = formData.get("task-heading");
      const taskDetails = formData.get("task-details");

      if (taskHeading) {
        tasks[taskIndex].taskHeading = taskHeading;
      }
      if (taskDetails) {
        tasks[taskIndex].taskDetails = taskDetails;
      }

      console.log(tasks);
      saveToLocalStorage(tasks);

      // Clear form
      editTaskForm.reset();

      // close modal
      editModalToggle.checked = false;
    });
  }
  renderTasks();
};

// Delete task with animation
const deleteTask = (taskId) => {
  const taskCard = document.querySelector(`[data-task-id="${taskId}"]`);
  if (taskCard) {
    // Animate the deletion
    taskCard.style.animation = "slideOut 0.3s ease-out forwards";
    setTimeout(() => {
      const tasks = getFromLocalStorage();
      const filteredTasks = tasks.filter((task) => task.id !== taskId);
      saveToLocalStorage(filteredTasks);
      renderTasks();
    }, 300);
  } else {
    const tasks = getFromLocalStorage();
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    saveToLocalStorage(filteredTasks);
    renderTasks();
  }
};

// Render all tasks
const renderTasks = () => {
  const tasks = getFromLocalStorage();

  // Show/hide empty state
  if (tasks.length === 0) {
    tasksContainer.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  // Render tasks
  tasksContainer.innerHTML = tasks
    .map(
      (task) => `
    <div class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 task-card ${
      task.isDone ? "opacity-60" : ""
    }" data-task-id="${task.id}">
      <div class="card-body">
        <div class="flex items-start gap-4">
          <input 
            type="checkbox" 
            class="checkbox checkbox-lg checkbox-accent mt-1" 
            ${task.isDone ? "checked" : ""}
            onchange="toggleTaskStatus(${task.id})"
          />
          <div class="flex-grow">
            <h2 class="card-title text-xl ${
              task.isDone ? "line-through text-base-content/50" : ""
            }">
              ${task.taskHeading}
            </h2>
            <p class="text-base-content/70 mt-2 ${
              task.isDone ? "line-through" : ""
            }">
              ${task.taskDetails}
            </p>
            ${
              task.isDone
                ? '<div class="badge badge-success gap-2 mt-3"><i class="fas fa-check"></i> Completed</div>'
                : ""
            }
          </div>
          <button 
            onclick="deleteTask(${task.id})" 
            class="btn btn-square btn-error btn-sm"
            title="Delete task"
          >
            <i class="fas fa-trash"></i>
          </button>
          <button 
            onclick="editTask(${task.id})" 
            class="btn btn-square btn-info btn-sm"
            title="Edit task"
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
};

// Handle form submission with animation
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(taskForm);
  const taskHeading = formData.get("task-heading");
  const taskDetails = formData.get("task-details");

  addToLocalStorage(taskHeading, taskDetails);

  // Animate the new task
  setTimeout(() => {
    const firstCard = tasksContainer.querySelector(".task-card:first-child");
    if (firstCard) {
      firstCard.style.animation = "slideInFromTop 0.4s ease-out";
    }
  }, 50);

  // Clear form
  taskForm.reset();

  // Close modal
  modalToggle.checked = false;
});

// Make functions globally accessible for onclick handlers
window.toggleTaskStatus = toggleTaskStatus;
window.deleteTask = deleteTask;

// Initial render
renderTasks();

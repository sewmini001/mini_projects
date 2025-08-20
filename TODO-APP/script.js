const addBtn = document.getElementById("addTask");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// load tasks from localStorage on page load
window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTaskToList(task));
};

addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    addTaskToList(taskText);
    saveTasks();
    input.value = "";
});

function addTaskToList(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
        li.remove();
        saveTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
}

// save tasks to localStorage
function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach(li => {
        // remove the "Remove" text from li
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


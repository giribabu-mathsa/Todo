function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    
    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    
    document.getElementById("task-list").appendChild(li);

    
    taskInput.value = "";
}


function toggleTask(task) {
    task.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}

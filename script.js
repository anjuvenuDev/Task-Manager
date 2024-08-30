let tasks = [];
document.getElementById("submitbutton").addEventListener("click", function() {
    let task = document.getElementById("tasks").value;
    if (task) {
        tasks.push(task);
        document.getElementById("tasks").value = "";
        updateTaskList();
        } 
    else {
        alert("You have not entered a task.");
    }
});

document.getElementById("search").addEventListener("input", function() {
    updateTaskList(this.value);
});

function updateTaskList(filter = "") {
    const taskList = document.getElementById("totinputs");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        if (task.toLowerCase().includes(filter.toLowerCase())) {
            let li = document.createElement("li");
            li.textContent = task;

            let buttons = document.createElement("div");
            buttons.className = 'buttons';

            let button1 = document.createElement("button");
            button1.textContent = "Update";
            button1.className = "update";
            button1.addEventListener("click", function() {
            let newval = prompt("Enter new task: ", task);
            if (newval) {
                tasks[index] = newval;
                updateTaskList(filter);
            }
            });

            let button2 = document.createElement("button");
            button2.textContent = "Delete";
            button2.className = "delete";
            button2.addEventListener("click", function() {
            tasks.splice(index, 1);
            updateTaskList(filter);
            });

            buttons.appendChild(button1);
            buttons.appendChild(button2);
            li.appendChild(buttons);
            taskList.appendChild(li);
        }
    });
}
       
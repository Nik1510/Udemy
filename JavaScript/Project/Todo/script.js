document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    let task = JSON.parse(localStorage.getItem('tasks')) || [];

    task.forEach((t) => renderTask(t));

    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };

        task.push(newTask);
        saveTask();
        renderTask(newTask);
        todoInput.value = "";
        console.log(task);
    });

    function renderTask(taskObj) {
        const li = document.createElement('li');
        li.setAttribute('data-id', taskObj.id);

        if (taskObj.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <span>${taskObj.text}</span>
            <button>delete</button>
        `;

        // ✅ Toggle completed (only when not clicking button)
        li.addEventListener('click', (e) => {
            if (e.target.tagName !== "BUTTON") {
                taskObj.completed = !taskObj.completed;
                li.classList.toggle('completed');
                saveTask();
            }
        });

        // ✅ Delete task
        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            task = task.filter(t => t.id !== taskObj.id);
            li.remove();
            saveTask();
        });

        todoList.appendChild(li);
    }

    function saveTask() {
        localStorage.setItem("tasks", JSON.stringify(task));
    }
});

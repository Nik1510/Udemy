document.addEventListener('DOMContentLoaded',()=>{
    const todoInput= document.getElementById('todo-input')
const addTaskButtom = document.getElementById('add-task-btn')
const todoList =document.getElementById('todo-list')

let task= JSON.parse(localStorage.getItem('tasks')) || [];

task.forEach((t)=>renderTask(t))
addTaskButtom.addEventListener('click',()=>{
    const taskText = todoInput.value.trim();
    if(taskText ==="") return;

    const newTask = {
        id: Date.now(),
        text:taskText,
        completed:false,
    };
    task.push(newTask);
    saveTask();
    renderTask(newTask);
    todoInput.value=""; // clear input
    console.log(task);
});

function renderTask(task){
    console.log();
    
}

function saveTask(){
    localStorage.setItem("tasks",JSON.stringify(task));
}
})
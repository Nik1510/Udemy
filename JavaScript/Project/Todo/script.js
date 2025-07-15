const todoInput= document.getElementById('todo-input')
const addTaskButtom = document.getElementById('add-task-btn')
const todoList =document.getElementById('todo-list')
let task=[];

addTaskButtom.addEventListener('click',()=>{
    const taskText = todoInput.value.trim();
    if(taskText ==="") return;

    const newTask = {
        id: Date.now(),
        text:taskText,
        competed:false,
    };
    task.push(newTask);
    todoInput.value=""; // clear input
    console.log(task);
    
})
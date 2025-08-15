let count = 0;

function addTask(){
    const inputElement = document.querySelector('input');
    const value = inputElement.value;

    const newDivElement = document.createElement('div');
    newDivElement.setAttribute('id', 'todo-'+ count)
    newDivElement.innerHTML = `<div>${value}</div>
    <button class="edit" onClick="editTodo(${count})">Edit</button>
    <button class="delete" onClick="deleteTodo(${count})">Delete</button>`;
    document.querySelector('body').appendChild(newDivElement);
    count++;
}

function editTodo(index){
    const todoElement = document.getElementById(`todo-${index}`);
    if (todoElement) {
        const newValue = prompt("Edit your todo item:", todoElement.querySelector('div').textContent);
        if (newValue !== null) {
            todoElement.querySelector('div').textContent = newValue;
        }
    } else {
        console.error('Todo item not found');
    }
}

function deleteTodo(index){
    const todoElement = document.getElementById(`todo-${index}`);
    if (todoElement) {
        todoElement.parentNode.removeChild(todoElement);
        // Alternatively, you can use:
        // todoElement.remove();
    } else {
        console.error('Todo item not found');
    }
}
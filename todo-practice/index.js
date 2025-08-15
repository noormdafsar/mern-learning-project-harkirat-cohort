let count = 0;

function addTask() {
    const inputElement = document.querySelector('input');
    const value = inputElement.value;

    const newDivElement = document.createElement('div');
    newDivElement.setAttribute('id', 'todo-' + count)
    // newDivElement.innerHTML = `<div>${value}</div>
    // <button class="edit" onClick="editTodo(${count})">Edit</button>
    // <button class="delete" onClick="deleteTodo(${count})">Delete</button>`;
    const spanElement = document.createElement('span');
    spanElement.textContent = value;

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit');
    editButton.setAttribute('onClick', `editTodo(${count})`);
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete');
    deleteButton.setAttribute('onClick', `deleteTodo(${count})`);
    deleteButton.textContent = 'Delete';

    newDivElement.appendChild(spanElement);
    newDivElement.appendChild(editButton);
    newDivElement.appendChild(deleteButton);
    document.querySelector('body').appendChild(newDivElement);
    count++;
}

function editTodo(index) {
    const todoElement = document.getElementById(`todo-${index}`);
    if (todoElement) {
        const spanElement = todoElement.querySelector('span');
        const newValue = prompt("Edit your todo item:", spanElement.textContent);
        if (newValue !== null) {
            spanElement.textContent = newValue;
        }
    } else {
        console.error('Todo item not found');
    }
}


function deleteTodo(index) {
    const todoElement = document.getElementById(`todo-${index}`);
    if (todoElement) {
        todoElement.parentNode.removeChild(todoElement);
        // Alternatively, you can use:
        // todoElement.remove();
    } else {
        console.error('Todo item not found');
    }
}
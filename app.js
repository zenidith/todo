const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

// Save our "todos" to local storage
if(todos){
    todos.forEach((todo) =>{
        addTodo(todo);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
})

function addTodo(todo){
    let todoText = input.value;
    if(todo){
        todoText = todo.text;
    }
    // Build the <li></li>
    if(todoText){
        const todoEl = document.createElement("li");
        if(todo && todo.completed){
            todoEl.classList.add("completed");
        }
        todoEl.innerText = todoText;

    // Mark as completed
    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle("completed");
    })

    // Delete
    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        todoEl.remove();
    })

    // Add it to the DOM
        todosUL.appendChild(todoEl);
        input.value = "";
    }
}

// Update local storage 
function updateLS(){
    todoEl = document.querySelectorAll('li');

    const todos = [];

    todoEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

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

        // Add it to the DOM
        todosUL.appendChild(todoEl);
        input.value = "";
    }
}
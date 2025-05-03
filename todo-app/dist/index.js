import { createTodoState, todoActions } from './utils.js';
// Initialize state and actions
const state = createTodoState();
const actions = todoActions(state);
// DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
// Render todos
function renderTodos() {
    todoList.innerHTML = '';
    state.todos.forEach((todo) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            actions.toggleTodo(todo.id);
            renderTodos();
        });
        const span = document.createElement('span');
        span.textContent = todo.text;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            actions.deleteTodo(todo.id);
            renderTodos();
        });
        li.append(checkbox, span, deleteBtn);
        todoList.appendChild(li);
    });
}
// Form submission
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
        actions.addTodo(text);
        todoInput.value = '';
        renderTodos();
    }
});
// Initial render
renderTodos();

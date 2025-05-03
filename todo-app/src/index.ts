import { createTodoState, todoActions } from './utils.js';
import type { Todo, TodoState, TodoActions } from './types.js';

// Initialize state and actions
const state: TodoState = createTodoState();
const actions: TodoActions = todoActions(state);

// DOM elements
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;

// Render todos
function renderTodos(): void {
  todoList.innerHTML = '';
  
  state.todos.forEach((todo: Todo) => {
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
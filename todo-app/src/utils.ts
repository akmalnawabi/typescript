import { Todo, TodoState,TodoActions } from "./types";

export function createTodoState(): TodoState {
  return {
    todos: [],
    currentId: 1,
  };
}

export function todoActions(state: TodoState): TodoActions {
  return {
    addTodo: (text: string) => {
      const newTodo: Todo = {
        id: state.currentId,
        text,
        completed: false,
      };
      state.todos.push(newTodo);
      state.currentId++;
    },
    toggleTodo: (id: number) => {
      const todo = state.todos.find(t => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (id: number) => {
      state.todos = state.todos.filter(t => t.id !== id);
    },
  };
}
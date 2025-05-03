type Todo = {
    id: number;
    text: string;
    completed: boolean
};

type TodoState = {
    todos: Todo[];
    currentId: number;
};

type TodoActions = {
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export {Todo, TodoState, TodoActions}
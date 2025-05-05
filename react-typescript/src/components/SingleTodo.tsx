import React, { useState } from 'react'
import { Todo } from '../model'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline, MdOutlineDone } from "react-icons/md";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }
    return (
        <form>
            {
                edit ? (
                    <input value={editTodo} />
                ) : (
                    todo.isDone ? (<s>{todo.todo}</s>) : (<span>{todo.todo}</span>)
                )
            }
            <div>
                <span onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}>{FaRegEdit({})}</span>
                <span onClick={() => handleDelete(todo.id)}>{MdOutlineDeleteOutline({})}</span>
                <span onClick={() => handleDone(todo.id)} >{MdOutlineDone({})}</span>
            </div>
        </form>
    )
}

export default SingleTodo
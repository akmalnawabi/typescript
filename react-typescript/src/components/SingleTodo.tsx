import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline, MdOutlineDone } from "react-icons/md";
import './style.css'

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
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo, todo: editTodo} : todo
        )))
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form className='edit_form' onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? (
                    <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                ) : (
                    todo.isDone ? (<s>{todo.todo}</s>) : (<span>{todo.todo}</span>)
                )
            }
            <div className='icons'>
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
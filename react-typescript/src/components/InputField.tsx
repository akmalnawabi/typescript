import React, { useRef } from 'react'
import './style.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='form' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur()
            }}>
            <input
             ref={inputRef}
             type="input" 
             placeholder='Enter a task' 
             value={todo} 
             onChange={(e) => setTodo(e.target.value)}
              />
            <button type='submit'>Go</button>
        </form>
    )
}

export default InputField
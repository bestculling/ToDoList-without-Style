import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    return (<form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={e => setUserInput(e.currentTarget.value)} placeholder="Enter task..." />
        <button>Submit</button>
    </form>)
}

export default ToDoForm;
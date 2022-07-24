import React from 'react';

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div>
            {toDoList.map((task) => (
                <p id={task.id} key={task.id} className={task.complete === true ? "strike": ""} onClick={handleClick}>{task.task}</p>
            ))}
         <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )

}

export default ToDoList;
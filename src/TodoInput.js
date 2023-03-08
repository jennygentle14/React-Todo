import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput ===''){
            alert('Cannot be empty!');
        } else {
            addTask(userInput);
        }
        
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="input" value={userInput} type="text" onChange={handleChange} placeholder="Enter new task..."/>
            <button className="add">Add</button>
        </form>
        
    );
};

export default TodoInput;
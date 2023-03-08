import React from 'react';

const Todo = ({todo,handleDeleteClick }) => {

    return (
        <div>
        <li id={todo.id} key={todo.id + todo.task} className="item">        
            {todo.task}
            <button  className= "del" onClick={() => handleDeleteClick(todo.id)}> X </button> </li>
             
        </div>
        
    );
};

export default Todo;
import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList, handleDeleteClick}) => {
    return (
        <ul className='list'>
            
            {todoList.map(todo => {
                return (
                     
                <Todo todo={todo}  handleDeleteClick={handleDeleteClick} />
                )
                
            })}
        </ul>
    );
};

export default TodoList;
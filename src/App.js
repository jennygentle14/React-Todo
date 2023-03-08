import React, { useState } from 'react';
import TodoInput from './TodoInput';
import tasks from "./tasks.json";
import TodoList from "./TodoList";



function App() {
  
  const [ todoList, setTodoList ] = useState(tasks);
  
  const handleDeleteClick = (id)  => {
    let removeItem = todoList.filter((todo)=> {
      return todo.id !==id;
    });
    setTodoList(removeItem);

  }

  const addTask = (userInput ) => {
    let copy = [...todoList];
    copy = [...copy, { id: todoList.length + 1, task: userInput, complete: false }];
    setTodoList(copy);
  }


  return (
    <div className="App">
      <header className='header'><h1> Todo List </h1>
      <TodoInput addTask={addTask}/>
      </header>
      
      <TodoList todoList={todoList} handleDeleteClick={handleDeleteClick}/>
      
    </div>
  );
}

export default App;
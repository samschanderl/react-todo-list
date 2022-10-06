import './App.css';
import Heading from './components/Heading';
import TodoList from './components/TodoList';
import AddTodos from './components/AddTodos';
import React, { useState } from 'react';
import { TodoContext } from './contexts/TodoContext';

function App() {

  const [ todos, setTodos] = useState([
    { "id": 1, "title": "Walking the dog", "completed": false },
    { "id": 2, "title": "Going to the gym", "completed": false },
    { "id": 3, "title": "Doing the laundry", "completed": false },
    { "id": 4, "title": "Finishing my Coding Project", "completed": true },
  ])

  return (
    <div className="App">
      <div className='Container'>
        <Heading />
        <TodoContext.Provider value={{todos, setTodos}}>
          <AddTodos/>
          <TodoList/>
        </TodoContext.Provider>
      </div>
    </div>
  );
}

export default App;

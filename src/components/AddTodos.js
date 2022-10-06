import { useContext, useRef } from 'react';
import {TodoContext} from '../contexts/TodoContext'

function AddTodos() {

    const inputRef = useRef();
    const { setTodos } = useContext(TodoContext);

    const addTodo = (e) => {
      e.preventDefault();
      const newTodo = inputRef.current.value
      setTodos((todos) => [...todos, {"id": todos.length, "title": newTodo, "completed": false}])
      inputRef.current.value = ""
    }

    return ( 
        <div className='AddTodos'>
        <h3>Add Todos</h3>
        <div className='FormField'>
          <input className='FormField__Input' ref={inputRef}></input>
          <button className='Btn FormField__Button' onClick={addTodo}>Add New Todo</button>
        </div>
      </div>
     );
}

export default AddTodos;
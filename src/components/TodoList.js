import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';

function TodoList() {

    // destructure the todos object from the context object
    const { todos, setTodos } = useContext(TodoContext)


    const uncompletedTodos = todos.filter((todo) => {
        return todo.completed === false
    })

    const completedTodos = todos.filter((todo) => {
        return todo.completed === true
    })

    const toggleStatus = (todo) => {
        todo.completed = !todo.completed
        setTodos([...todos])
    }

    const deleteTodo = (item) => {
        let newTodos = todos.filter(todo => todo.id !== item.id)
        setTimeout(() => {
            setTodos(newTodos)}, 300)
        
    }

    // const zoomOut = (e) => {
    //     console.log(e)
    //     let parentDiv = e.target.parentElement
    //     console.log(parentDiv.style)
    //     parentDiv.style.transform = "scale(0%) 2s"
    //     console.log(parentDiv.style.transform)
    //     console.log('zooming out')
    // }

    return ( 
        <div className="TodoList">
            <h2 className="TodoList__Heading">Current Todo's</h2>
            <div className="Divider"></div>
            {uncompletedTodos.map((todo) => {
                    return (
                        <div className="TodoItem" key={todo.id}>
                            <p className="TodoItem__Text">{todo.title}</p>
                            <span className="material-symbols-outlined TodoItem__Status TodoItem__Status--uncomplete"
                            onClick={() => {toggleStatus(todo)}}>radio_button_unchecked</span>
                            <span className="material-symbols-outlined TodoItem__Delete"
                            onClick={() => {deleteTodo(todo)}}>delete</span>
                        </div>
                    )
                }) }
            <br></br>
            <h2 className="TodoList__Heading">Completed Todo's</h2>
            <div className="Divider"></div>  
            {completedTodos.map((todo) => {
                    return (
                        <div className="TodoItem" key={todo.id}>
                            <p className="TodoItem__Text">{todo.title}</p>
                            <span className="material-symbols-outlined TodoItem__Status TodoItem__Status--complete"
                            onClick={() => {toggleStatus(todo)}}>radio_button_checked</span>
                            <span className="material-symbols-outlined TodoItem__Delete"
                            onClick={() => {deleteTodo(todo)}}>delete</span>
                        </div>
                    )
                })}
        </div>

     );
}

export default TodoList
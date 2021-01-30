import React  from 'react'
// This is a Todo.js module
// by default it exports functional component Todo 


// This is a stateless functional component which renders todos
export default function Todo({todo,update_todo_check}) {
    // here we are destructuring the props object and storing todo
    
    function changeStatus() {
        console.log("trying to update change")
        // update_todo_check(todo.id);
    }
    console.log("todo")
    console.log(todo);  
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={changeStatus}/>
                {todo.title}
            </label>    
        </div>
    )
}

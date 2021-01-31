import React,{useContext}  from 'react'
import {MyContext} from './App'
import './App.css'
// This is a Todo.js module
// by default it exports functional component Todo 


// This is a stateless functional component which renders todos
export default function Todo({todo}) {
    // here we are destructuring the props object and storing todo
    const {setLength}=useContext(MyContext)
    
    function changeStatus() {
        // this function updates the checked status
        // of a todo
        // here we make use of length status so
        // that re-rendering takes place after status update

        var formdata = new FormData();
        formdata.append("completed", !todo.completed);
        formdata.append("title", todo.title);

        var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
        };

        let url=`http://127.0.0.1:8000/todo_api/task-detail/${todo.id}/`

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
                setLength(prevlength=>prevlength+1)
                // console.log(result)
            })
        .catch(error => console.log('error', error));
    }
    
    function delete_todo(){
        // function to delete a todo
        var formdata = new FormData();

        var requestOptions = {
        method: 'DELETE',
        body: formdata,
        redirect: 'follow'
        };

        fetch(`http://127.0.0.1:8000/todo_api/task-detail/${todo.id}/`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            setLength(prevlength => prevlength-1)
            }
        )
        .catch(error => console.log('error', error));
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={changeStatus}/>
                {todo.title}
                <button className="btn" onClick={delete_todo}><i className="fa fa-trash"></i></button>
            </label>    
        </div>
    )
}

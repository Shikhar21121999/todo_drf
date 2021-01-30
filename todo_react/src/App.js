import React, { useState,useRef,useEffect } from 'react';
import './App.css';
import Todolist from './Todolist'

function App() {

  const [todoarr,setTodoarr]=useState([])
  const new_todo_input_ref=useRef()

  function update_todo_check(){
    console.log("I do nothing")
  }

  useEffect(() => {
    // send a get request for todo list
    console.log("fetching")
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/todo_api/task-list/", requestOptions)
      .then(response => response.json())
      .then(result => setTodoarr(result))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <h1>Todo App</h1>
      <input ref={new_todo_input_ref} type="text"/>
      {/* <button onClick={new_todo_add}>Add a new todo</button> */}
      <Todolist todoarr={todoarr} update_todo_check={update_todo_check}/>
      {/* <button onClick={remove_completed}>Clear complete</button> */}
      {/* <div>{todoarr.filter( ({status}) => !status).length} left to do</div> */}
    </>
  );
}

export default App;

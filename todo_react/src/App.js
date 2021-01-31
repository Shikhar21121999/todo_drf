import React, { useState,useRef,useEffect } from 'react';
import './App.css';
import Todolist from './Todolist'

export const MyContext=React.createContext()

function App() {

  const [todoarr,setTodoarr]=useState([])
  const [length,setLength]=useState(0)
  const new_todo_input_ref=useRef()

  function new_todo_add(){
    // sends a post request to api to add a new todo
    // also updates todoarr so that useEffect can be called

    var formdata = new FormData();
    formdata.append("title", new_todo_input_ref.current.value);
    formdata.append("completed", "false");
    console.log("form data")
    console.log(formdata)

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/todo_api/task-list/", requestOptions)
      .then(response => response.json())
      .then(result => {
          console.log(result)
          console.log("updating todoarr")
          setLength(prevLength => prevLength+1)
            new_todo_input_ref.current.value=null
        }
      )
      .catch(error => console.log('error', error));
    
  }

  useEffect(() => {
    // send a get request for todo list
    // and update setTodoarr as the response of the get call
    console.log("fetching")
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/todo_api/task-list/", requestOptions)
      .then(response => response.json())
      .then(result => setTodoarr(result))
      .catch(error => console.log('error', error));
  }, [length]);
  return (
    <>
      <h1>Todo App</h1>
      <input ref={new_todo_input_ref} type="text"/>
      <button onClick={new_todo_add}>Add a new todo</button>
      <MyContext.Provider value={{length,setLength}}>
        <div>{length}</div>
        <Todolist todoarr={todoarr} />
        {/* <button onClick={remove_completed}>Clear complete</button> */}
        <div>{todoarr.filter( ({completed}) => !completed).length} left to do</div>
      </MyContext.Provider>
    </>
  );
}

export default App;

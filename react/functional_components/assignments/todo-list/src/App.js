// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Todo from "./components/Todo"
import NewTask from './components/NewTask';

function App() {
  // two parts can be changed: the entry to enter a task for to do (form) and the list of todos itself. Therefore 2 states
  const[newTask, setNewTask] = useState('');
  const[todos, setTodos] = useState([]);

  // when task is sumbitted
  const handleSubmittedTask = (e) => {
    e.preventDefault();
    if (newTask.length === 0) {
      return; // do nothing if nothing entered
    }
    const taskItem = {
      text: newTask,
      complete: false
    }
    // console.log(newTask);
    setTodos([...todos, taskItem]);
    setNewTask("");
  };

  const handleTodoDelete = (delId) => {
    const filteredTodos = todos.filter((_todo, i) => { // preceding underscore tells JS that we are not using that param
      return i !== delId;
    });

    setTodos(filteredTodos);
  };

  const handleTodoDeleteAll = (todo_list) => {
    const filteredTodos = todos.filter((todo, i) => { // preceding underscore tells JS that we are not using that param
      return !todo.complete; // return all that is not completed
    });

    setTodos(filteredTodos);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo, i) => {
      if (id === i) {
        // simple approach that may risk mutating state directly
        // todo.complete = !todo.complete;
        // best practice:
        const updatedTodo = {...todo, complete: !todo.complete};
        return updatedTodo; //if changed, then return
      }
      return todo; // if no change, then return normal
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <NewTask newTask={newTask}
                handleSubmittedTask={handleSubmittedTask}
                setNewTask={setNewTask} />

      
      <hr />
      {/* map set of todos {value, index as params}*/}
      {
        todos.map((todo, i) => {
          return <Todo 
                    key={i}
                    todo={todo} 
                    handleToggleComplete={handleToggleComplete} 
                    i={i} 
                    handleTodoDelete={handleTodoDelete} /> // referring to the todo in the map function
        })
      }

      <button onClick={(e) => {
                handleTodoDeleteAll(todos);
                }}>Delete Selected</button>

    </div>
  );
}

export default App;

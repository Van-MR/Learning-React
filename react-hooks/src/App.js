import React, { useState } from 'react';
import './App.css';


function Todo({ todo, index, removeTodo, completeTodo }) {
    return(
      <div className="todo">
        <p style={{textDecoration:todo.isComplete ? 'line-through' : '' }}>{todo.text}</p>
        <button onClick={() => completeTodo(index) }>complete</button>
        <button onClick={() =>  removeTodo(index) }>x</button>
      </div>
    )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="input"
        onChange={e => setValue(e.target.value)}
        placeholder="What do you want to accomplish?"
      />
    </form>
  );
}


function App() {
    const [todos,setTodos] = useState([
      {
        text:'learn about react',
        isComplete: false
      },
      {
        text:'undestand the logic',
        isComplete: false
      },
      {
        text:'be the best',
        isComplete: false
      }
    ]);

const completeTodo = index => {
  let newTodos = [...todos];
  newTodos[index].isComplete = true;
  setTodos(newTodos);
}


const removeTodo = index => {
        let newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }

const addTodo = text => {
  let newTodos = [...todos,{text}];
  setTodos(newTodos);
}

    return (
      <div className="app">
          <div className="todo-list">
             {todos.map((todo,index) => (
               <Todo
                 todo={todo}
                 key={index}
                 index={index}
                 removeTodo={removeTodo}
                 completeTodo={completeTodo}
                />
             ))}
             <TodoForm
               addTodo={addTodo}
               />
          </div>
      </div>
    )
}

export default App;

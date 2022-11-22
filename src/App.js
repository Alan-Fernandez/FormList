import React, { Fragment } from 'react';
import './App.css';

const todos = [
  {text:"Cortar cebolla", completed: false},
  {text:"Tomar cafe", completed: false},
  {text:"mirar el mundial", completed: false},
]
function App() {
  return (
    <Fragment>
        <TodoCounter />  
        <h2> Has complentado 2 de 3 ToDos</h2>  
        <TodoSearch />
        <input placeholder='Cebolla'/>
        <TodoList>
          {todos.map(todo =>(
            <TodoItem/>
          ))}
        </TodoList>
        <CreateTodoButton />
        <button>+</button>
        <button>-</button>
    </Fragment>
  );
}

export default App;

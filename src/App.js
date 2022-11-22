import React, { Fragment } from 'react';
import {TodoCounter} from './TodoCounter';
import { TodoItem} from './TodoItem';
import {TodoList} from './TodoList';
import {TodoSearch} from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

// import './App.css';

const todos = [
  {text:"Cortar cebolla", completed: true},
  {text:"Tomar cafe", completed: false},
  {text:"mirar el mundial", completed: false},
]
function App() {
  return (
    <Fragment>
        <TodoCounter />  
        <TodoSearch />

        <TodoList>
          {todos.map(todo =>(
            <TodoItem
             key={todo.text}
             text={todo.text}
             completed={todo.completed}
             />
          ))}
        </TodoList>

        <CreateTodoButton />
    </Fragment>
  );
}

export default App;

import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext'


// const defaultTodos = [
//   {text:"Cortar cebolla", completed: true},
//   {text:"Tomar cafe", completed: false},
//   {text:"mirar el mundial", completed: false},
//   {text:"ver el mar", completed: false},
// ];


function App() {
 
  return (
        <TodoProvider>
          <AppUI/>
        </TodoProvider>
  );
}

export default App;

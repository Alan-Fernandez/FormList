import React, { Fragment } from 'react';
import { AppUI } from './AppUI';


const defaultTodos = [
  {text:"Cortar cebolla", completed: true},
  {text:"Tomar cafe", completed: false},
  {text:"mirar el mundial", completed: false},
  {text:"ver el mar", completed: false},
];


function App() {
  const [todos, setTodos]= React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if (!searchValue.length >= 1){
    searchTodos = todos;
  }else{
    searchTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo =(text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  } 
  const deleteTodo =(text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  } 

  return (
    <Fragment>
        <AppUI
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchTodos={searchTodos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          
        />
    </Fragment>
  );
}

export default App;
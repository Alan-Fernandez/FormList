import React, { Fragment } from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem} from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";


const AppUI=()=>{
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        } = React.useContext(TodoContext);
    return(
            <Fragment>
                <TodoCounter/>  
                <TodoSearch/>
                        <TodoList>
                        {error && <p>Desespérate, hubo un error...</p>}
                        {loading && <p>Estamos cargando, no desesperes...</p>}
                        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
                        {searchedTodos.map(todo =>(

                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>

                    {!!openModal && (
                        <Modal>
                        <p>{searchedTodos[0]?.text}</p>
                        </Modal>
                    )}
                <CreateTodoButton 
                    setOpenModal={setOpenModal}
                />
            </Fragment>
        );
    };

export {AppUI};
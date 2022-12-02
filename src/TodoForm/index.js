import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [ newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const onChange =(event)=>{
        setNewTodoValue(event.target.value);
    }
    const onCancel =()=>{
        setOpenModal(false);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return(
        <form
            onSubmit={onSubmit}
        >
            <label>new Todo</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="crea un TODo"/>

            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="sumit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
};

export {TodoForm};
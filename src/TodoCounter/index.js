import React, { Fragment } from "react";
import {TodoContext} from '../TodoContext'
import './TodoCounter.css';

const TodoCounter=()=>{
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return(
        <Fragment>
            <h2 className="TodoCounter"> Has complentado {completedTodos} de {totalTodos} ToDos</h2> 
        </Fragment>
    )
};

export {TodoCounter};

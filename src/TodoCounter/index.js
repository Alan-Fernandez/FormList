import React, { Fragment } from "react";
import {TodoContext} from '../TodoContext'
import './TodoCounter.css';

const TodoCounter=()=>{
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return(
        <Fragment>
            <h1 className="TodoCounter"> Todos complentado <br/> {completedTodos} de {totalTodos}</h1> 
        </Fragment>
    )
};

export {TodoCounter};

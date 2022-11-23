import React, { Fragment } from "react";
import './TodoCounter.css';

const TodoCounter=({total, completed})=>{

    return(
        <Fragment>
            <h2 className="TodoCounter"> Has complentado {completed} de {total} ToDos</h2> 
        </Fragment>
    )
};

export {TodoCounter};
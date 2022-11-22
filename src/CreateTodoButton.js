import React, { Fragment } from "react";
import "./CreateTodoButton.css"

const CreateTodoButton =(props)=>{

    const onClickButton = (msj)=>{
        alert(msj)
    }
    return(
        <Fragment>
            <button 
                className="CreateTodoButton"
                onClick={()=>onClickButton('Hello world')}
            >
                +
            </button>
        </Fragment>
    );
};

export {CreateTodoButton};
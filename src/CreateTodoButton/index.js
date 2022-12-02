import React, { Fragment } from "react";
import "./CreateTodoButton.css"

const CreateTodoButton =(props)=>{

    const onClickButton = ()=>{
        props.setOpenModal(prevState => !prevState);
    }
    return(
        <Fragment>
            <button 
               className="CreateTodoButton"
               onClick={onClickButton}
            >
                +
            </button>
        </Fragment>
    );
};

export {CreateTodoButton};
import React, { Fragment } from "react";
import "./TodoList.css"

const TodoList =(props)=>{
    return(
        <Fragment>
            <ul>
                {props.children}
            </ul>
        </Fragment>
    );
};

export {TodoList};
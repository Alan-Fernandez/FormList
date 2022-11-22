import React, { Fragment } from "react";

const TodoItem =(props)=>{
    return(
        <Fragment>
            <li>
                <span>C</span>
                <p>{props.text}</p>
                <span>X</span>
            </li>
        </Fragment>
    )
}

export {TodoItem};
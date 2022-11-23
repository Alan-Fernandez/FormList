import React, { Fragment } from "react";
import "./TodoItem.css"

const TodoItem =(props)=>{
    return(
        <Fragment>
            <li className="TodoItem">
                <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
                >
                    √
                </span>

                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    {props.text}
                    </p>

                <span 
                    className="Icon Icon-delete"
                    onClick={props.onDelete}
                    >
                    X
                    </span>
            </li>
        </Fragment>
    )
}

export {TodoItem};
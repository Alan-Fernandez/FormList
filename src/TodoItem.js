import React, { Fragment } from "react";
import "./TodoItem.css"

const TodoItem =(props)=>{
    const onComplete =()=>{
        alert('completado: ' + props.text)
    }

    const onDelete =()=>{
        alert('eliminado: '+ props.text)
    }
    return(
        <Fragment>
            <li className="TodoItem">
                <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
                >
                    √
                </span>

                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    {props.text}
                    </p>

                <span 
                    className="Icon Icon-delete"
                    onClick={onDelete}
                    >
                    X
                    </span>
            </li>
        </Fragment>
    )
}

export {TodoItem};
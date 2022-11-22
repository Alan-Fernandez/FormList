import React, { Fragment } from "react";

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
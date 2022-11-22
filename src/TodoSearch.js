import React, { Fragment } from "react";
import "./TodoSearch.css"

const TodoSearch =()=>{
    const onSearchValueChange=(event)=>{
        console.log(event)
    };
    
    return(
        <Fragment>
             <input 
                className="TodoSearch"     placeholder="Cebolla" 
                onChange={onSearchValueChange}
             />
        </Fragment>
    );
};

export {TodoSearch};
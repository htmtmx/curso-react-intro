import React from "react";
import "./TodoSearch.css"

function TodoSearch() {
    return (
        <>
            <input className="input_search" placeholder="Cortar Cebolla" onChange={
                (event) => {
                    console.log(event);
                    console.log(event.target);
                    console.log(event.target.value);

                }
            } />
        </>
    );
}

export { TodoSearch };
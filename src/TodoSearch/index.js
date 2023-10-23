import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const { stateSearchValue, setStateSearchValue} = React.useContext(TodoContext);

    return (
        <>
            <input className="input_search" placeholder="Cortar Cebolla"
                value={stateSearchValue}
                onChange={
                (event) => {
                    setStateSearchValue(event.target.value);
                    

                }
            } />
        </>
    );
}

export { TodoSearch };
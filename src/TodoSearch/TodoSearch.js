import React from "react";
import "./TodoSearch.css"

function TodoSearch({ stateSearchValue, setStateSearchValue}) {
    

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
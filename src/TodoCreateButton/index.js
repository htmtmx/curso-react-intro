import React from 'react';
import './TodoCreateButton.css'
import { TodoContext } from '../TodoContext';

function TodoCreateButton() {
    const{openModal, setOpenModal} = React.useContext(TodoContext);
    return (
        <>
            <button onClick={() => {
                setOpenModal(!openModal)
            }}>+</button>
        </>
    );
}

export { TodoCreateButton };
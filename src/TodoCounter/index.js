import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const { completedTodos:completed, totalTodos:total}=React.useContext(TodoContext);
	return (
        <h1>
			Has completado {completed} de {total} TODOs
		</h1>
	);
}

export { TodoCounter };
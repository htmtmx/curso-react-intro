import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import { TodoItem } from './TodoItem';
import React from 'react';

const defaultTodos = [
	{
		text: "Cortar cebolla",
		completed: false,
	},
	{
		text: "Terminar curso de Reactjs",
		completed: false,
	},
	{
		text: "Hacer el super",
		completed: false,
	},
	{
		text: "Lavar el auto",
		completed: false,
	},
];

function App() {
    return (
    <React.Fragment>
        <TodoCounter completed={16} total={30} />
        <TodoSearch />
            <TodoList>
                {defaultTodos.map(todo => (
                    <TodoItem key={todo.text} text={ todo.text} completed= {todo.completed} />
                ))}
        </TodoList>
        <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import logo from './platzi.webp';
import './App.css'
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoCreateButton } from "./TodoCreateButton/TodoCreateButton";
import { TodoItem } from './TodoItem/TodoItem';
import { TodoAdd } from './TodoAdd/TodoAdd'

const defaultTodos = [
	{
		text: "Cortar cebolla",
		completed: false,
	},
	{
		text: "Terminar curso de Reactjs",
		completed: true,
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
    const [stateSearchValue, setStateSearchValue] = React.useState("");
    const [todos, setTodos] = React.useState(defaultTodos);

    const completedTodos = todos.filter(todo => !!todo.completed ).length;
    const totalTodos = todos.length;
    console.log("Se buscan todos de:" + stateSearchValue);
    return (
			<main>
				<TodoCounter completed={ completedTodos } total={ totalTodos } />
				<section className="container-search">
                <TodoSearch
                    stateSearchValue = {stateSearchValue}
                    setStateSearchValue = { setStateSearchValue}
                />
                </section>
				<div className="container-todo-list">
                    <TodoList>
                        {defaultTodos.map((todo) => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                            />
                        ))}
                    </TodoList>
                </div>
				<div className='section-add-todo'>
                    <TodoAdd />
                    <TodoCreateButton />
                </div>
			</main>
		);
}

export default App;

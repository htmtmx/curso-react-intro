import logo from './platzi.webp';
import './App.css'
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoAdd } from './TodoAdd/TodoAdd'

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
    <main>
        <TodoCounter completed={16} total={30} />
        <TodoSearch />
            <TodoList>
                {defaultTodos.map(todo => (
                    <TodoItem key={todo.text} text={ todo.text} completed= {todo.completed} />
                ))}
            </TodoList>
            <TodoAdd />
        <CreateTodoButton />
    </main>
  );
}

export default App;

import React from 'react';
import logo from './platzi.webp';
import './App.css'
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoCreateButton } from "./TodoCreateButton/TodoCreateButton";
import { TodoItem } from './TodoItem/TodoItem';
import { TodoAdd } from './TodoAdd/TodoAdd'

function useLocalStorage(itemName, initialValue) {
    
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newItem);
    };

    return [item, saveItem];
}

function App() {

    const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
    const [stateSearchValue, setStateSearchValue] = React.useState("");

    const completedTodos = todos.filter(todo => !!todo.completed ).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter((todo) => { 
        const todo_text = todo.text.toLowerCase();
        const search_text = stateSearchValue.toLowerCase();
        return todo_text.includes(search_text);
    });

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
        
    return (
        <main>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <section className="container-search">
                <TodoSearch
                    stateSearchValue={stateSearchValue}
                    setStateSearchValue={setStateSearchValue}
                />
            </section>
            <div className="container-todo-list">
                <TodoList>
                    {searchedTodos.map((todo) => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
            </div>
            <div className="section-add-todo">
                <TodoAdd />
                <TodoCreateButton />
            </div>
        </main>
    );
}

export default App;

import React from 'react';
import logo from './platzi.webp';
import './App.css'
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoCreateButton } from "./TodoCreateButton/TodoCreateButton";
import { TodoItem } from './TodoItem/TodoItem';
import { TodoAdd } from './TodoAdd/TodoAdd'


function App() {
    const localStorageTodos = localStorage.getItem("todos_v1");
    let parsedTodos;
    if (!localStorageTodos) {
        localStorage.setItem("todos_v1", JSON.stringify([]));
        parsedTodos= []
    }else{
        parsedTodos = JSON.parse(localStorageTodos);
    }
    const [stateSearchValue, setStateSearchValue] = React.useState("");
    const [todos, setTodos] = React.useState(parsedTodos);

    const completedTodos = todos.filter(todo => !!todo.completed ).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter((todo) => { 
        const todo_text = todo.text.toLowerCase();
        const search_text = stateSearchValue.toLowerCase();
        return todo_text.includes(search_text);
    });

    const saveTodos = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem("todos_v1", stringifiedTodos);
        setTodos(newTodos);
    }

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

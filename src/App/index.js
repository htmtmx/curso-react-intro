import React from 'react';
import './App.css'
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

function App() {

    const { item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage("TODOS_V1", []);
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
        <AppUI totalTodos={totalTodos} 
            completedTodos={completedTodos} 
            searchedTodos={searchedTodos}
            stateSearchValue={stateSearchValue}
            setStateSearchValue={setStateSearchValue}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            error={error}
            loading={loading}
        />
    );
}

export default App;

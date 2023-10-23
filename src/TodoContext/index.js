import React from "react";
import { useLocalStorage } from "./useLocalStorage"

const TodoContext = React.createContext();

function TodoProvider({ children }) {
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
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchedTodos,
            stateSearchValue,
            setStateSearchValue,
            completeTodo,
            deleteTodo,
            error,
            loading,}
        }>
            { children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider}
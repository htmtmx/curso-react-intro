import React, {useEffect} from 'react';
import './App.css'
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

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

    console.log("Log 1");

    console.log("Log 2");

    console.log("Log 3");
    // Para poder controlar la ejecucion de ciertas lineas de codigo, se puede usar el useEffect
    // useEffect recibe dos parametros, el primero es una funcion que se ejecutara cuando se monte el componente
    // (Cuando hablamos de montar un componente, nos referimos a que el componente se renderiza por primera vez)
    // y el segundo parametro es un arreglo de dependencias, que se ejecutara cuando el valor de las dependencias cambie
    // useEffect se ejecuta despues de que el componente se renderiza por primera vez, es decir, despues de que se monta el componente
    
    // Cuando solo se tiene el primer parametro, useEffect se ejecutara cuando el componente se monte y cuando el componente se desmonte
    // En este ejemplo, en consola veremos el log 1, 2, 3, 4 y 6 y el log 200 al final
    useEffect(() => {
        // Se ejecuta cuando se monta el componente y cuando se desmonta
        console.log("Log 200");
    },);

    // Cuando se tiene el segundo parametro vacio, useEffect se ejecutara cuando el componente se monte
    // En este ejemplo, en consola veremos el log 1, 2, 3, 4, 5 y 6 y el log 300 al final, pero solo se ejecutara una vez
    useEffect(() => {
        // Solo se ejecuta una vez, cuando se monta el componente
        console.log("Log 300");
    }, []);
    
    // Cuando se tiene el segundo parametro, useEffect se ejecutara cuando el componente se monte y cuando el valor de las dependencias cambie
    // En este ejemplo, en consola veremos el log 1, 2, 3, 4, 5 y 6 y el log 400 al final, pero solo se ejecutara cuando el valor de las dependencias cambie
    useEffect(() => {
        // Se ejecuta cuando se monta el componente y cuando cambia el valor de las dependencias, en este caso, cuando cambia el valor de totalTodos
        console.log("Log 400");
    }, [totalTodos]);

    console.log("Log 4");
    console.log("Log 5");

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
        />
    );
}

export default App;

import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import { TodoItem } from './TodoItem';
import React from 'react';

function App() {
    return (
    <React.Fragment>
        <TodoCounter completed={16} total={30} />
        <TodoSearch />
        <TodoList>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </TodoList>
        <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

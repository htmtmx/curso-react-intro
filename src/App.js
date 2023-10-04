import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import { TodoItem } from './TodoItem';

function App() {
    return (
        <div className="App">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </TodoList>
            <CreateTodoButton />
        </div>
  );
}

export default App;

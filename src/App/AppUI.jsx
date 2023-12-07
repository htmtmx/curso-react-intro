import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoCreateButton } from "../TodoCreateButton";
import { TodoItem } from "../TodoItem";
import { TodoAdd } from "../TodoAdd";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";
import { Modal } from "./Modal";

function AppUI() {
    const { searchedTodos, completeTodo, deleteTodo, error, loading, openModal } =
			React.useContext(TodoContext);
    return (
			<main>
				<TodoCounter />
				<section className="container-search">
					<TodoSearch />
				</section>
				<div className="container-todo-list">
					<TodoList>
						{loading && <TodosLoading />}
						{error && <TodosError />}
						{!loading && searchedTodos.length === 0 && <EmptyTodos />}
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
					<TodoCreateButton/>
                    {openModal ?
                    
                        <Modal>
                            <div className="modal-header">
                                <h2>Nuevo TODO</h2>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="todo">Nombre del TO-DO</label>
                                <input type="text" id="todo"/>
                            </div>
                        <div className="modal-footer">
                            <button>Agregar TODO</button>
                            </div>
                        </Modal>
            : <></>}
				</div>
			</main>
		);
}

export { AppUI };
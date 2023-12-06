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
					{openModal? <Modal>Funcionalidad de agregar TODO</Modal>:<></>}
				</div>
			</main>
		);
}

export { AppUI };
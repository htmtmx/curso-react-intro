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

function AppUI() {
    return (
			<main>
				<TodoContext.Consumer>
					{({ totalTodos, completedTodos }) => (
						<TodoCounter completed={completedTodos} total={totalTodos} />
					)}
				</TodoContext.Consumer>
				<section className="container-search">
					<TodoContext.Consumer>
						{({
							stateSearchValue,
							setStateSearchValue,
						}) => (
							<TodoSearch
								stateSearchValue={stateSearchValue}
								setStateSearchValue={setStateSearchValue}
							/>
						)}
					</TodoContext.Consumer>
				</section>
				<div className="container-todo-list">
					<TodoContext.Consumer>
						{({ searchedTodos, completeTodo, deleteTodo, error, loading }) => (
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
						)}
					</TodoContext.Consumer>
				</div>
				<div className="section-add-todo">
					<TodoAdd />
					<TodoCreateButton />
				</div>
			</main>
		);
}

export { AppUI };
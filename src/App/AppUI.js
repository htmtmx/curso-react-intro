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

function AppUI(
    {
        totalTodos,
        completedTodos,
        searchedTodos,
        stateSearchValue,
        setStateSearchValue,
        completeTodo,
        deleteTodo,
        error, 
        loading,
    }
) {
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
                    {loading && <TodosLoading/>}
                    {error && <TodosError/>}
                    {!loading && searchedTodos.length ===0 && <EmptyTodos/>}
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

export { AppUI };
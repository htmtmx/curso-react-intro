import { CompleteIcon } from "../CompleteIcon/";
import { DeleteIcon } from "../DeleteIcon/";
import "./TodoItem.css"

function TodoItem(props) {
	return (
		<li className={`todo-item glowing ${props.completed ? "todo-item-li--complete" : "todo-item-li--uncomplete"}`}>
			<CompleteIcon completed={props.completed} onComplete={props.onComplete} />
			<p
				className={`todo-item-p ${
					props.completed ? "todo-item-p--complete" : "todo-item-p--uncomplete"}`}
			>
				{props.text}
			</p>
			<DeleteIcon onDelete={props.onDelete} />
		</li>
	);
}

export { TodoItem };
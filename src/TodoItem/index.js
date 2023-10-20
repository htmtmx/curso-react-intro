import { CompleteIcon } from "../CompleteIcon/";
import { DeleteIcon } from "../DeleteIcon/";
import "./TodoItem.css"

function TodoItem(props) {
	return (
        <li className="todo-item">
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete} />
			{/* <span
                className={`icon icon-check ${props.completed && "icon-check--active"}`}
                onClick={ props.onComplete}
			>
				V
			</span> */}
			<p
				className={`todo-item-p ${props.completed && "todo-item-p--complete"}`}
			>
				{props.text}
            </p>
            <DeleteIcon
                onDelete={ props.onDelete } />
            {/* <span className="icon icon-delete"
                onClick={props.onDelete}
            >X</span> */}
		</li>
	);
}

export { TodoItem };
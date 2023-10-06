import './TodoCreateButton.css'

function TodoCreateButton() {
    return (
        <>
            <button onClick={(event) => {
                console.log('Diste click');
                console.log(event);
                console.log(event.target);
            }}>+</button>
        </>
    );
}

export { TodoCreateButton };
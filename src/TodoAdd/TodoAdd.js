import './TodoAdd.css'

const defaultExamplesTodos = [
    {
        text: ''
    }
]

function TodoAdd(params) {
    
    
    return (
        <>
            <input className='input-todo-add' placeholder='Lavar los trastes'></input>
        </>
    )
}

export { TodoAdd }
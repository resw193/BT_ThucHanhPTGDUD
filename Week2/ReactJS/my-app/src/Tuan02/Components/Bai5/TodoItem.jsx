
function TodoItem({ task, index, deleteToDo }) {
    return (
        <div>
            <span>- {task}</span>
            <button onClick={() => deleteToDo(index)}>Xóa</button>
        </div>
    )
}

export default TodoItem;
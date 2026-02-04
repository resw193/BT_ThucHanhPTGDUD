import TodoItem from "./TodoItem";

function TodoList({ todos, deleteToDo }) {
    return (
        <div>
            <h3>Danh sách công việc</h3>
            {todos.map((todo, idx) => (
                <TodoItem
                    task={todo}
                    index={idx}
                    deleteToDo={deleteToDo}
                ></TodoItem>
            ))}
        </div>
    )
}

export default TodoList;
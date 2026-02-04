import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import './TodoApp.css';

function TodoApp() {
    const [todos, setTodos] = useState(['todo1', 'todo2', 'todo3']);

    // Thêm công viec mới
    function addTodo(newTodo) {
        setTodos([...todos, newTodo]);
    }

    // Xóa công việc theo ID
    function deleteToDo(idx) {
        setTodos(todos.filter((_, index) => index !== idx));
    }

    return (
        <div className="todo-app">
            <h2>Todo App</h2>

            {/* Nhập công việc và thêm*/}
            <TodoInput addToDo={addTodo}></TodoInput>

            {/* Danh sách công việc và có thể xóa công việc */}
            <TodoList todos={todos} deleteToDo={deleteToDo}></TodoList>
        </div>
    )
}

export default TodoApp;
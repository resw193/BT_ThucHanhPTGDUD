import React, { useState, useEffect } from 'react';

function FetchApiAdvanced() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Disable nút khi đang submit
    const [error, setError] = useState(null);

    const url = "https://jsonplaceholder.typicode.com/todos";

    // 1. GET: Lấy danh sách ban đầu
    useEffect(() => {
        async function fetchTodos() {
            try {
                const res = await fetch(url);

                // Error 400/500 --> Catch không bắt được lỗi
                if (!res.ok) {
                    throw new Error("Lỗi: Không thể tải danh sách");
                }

                const data = await res.json();
                console.log(data);
                setTodos(data);
            } catch (error) {
                console.log("error networking");
                setError(error.message);
            }
        }

        fetchTodos();
    }, []);

    // Log lại danh sách todos mỗi khi có sự thay đổi (sau khi thêm/xóa)
    useEffect(() => {
        if (todos.length > 0) {
            console.log("Updated Todos List:", todos);
        }
    }, [todos]);

    // 2. POST: Thêm todo mới
    async function addTodo(e) {
        e.preventDefault();
        if (!title.trim()) return;

        setIsLoading(true); // Bắt đầu submit
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ userId: 1, title: title, completed: false })
            });

            // Error 400/500 --> Catch không bắt được lỗi
            if (!res.ok) {
                throw new Error("Lỗi: Không thể thêm todo mới");
            }

            const newTodo = await res.json(); // response sẽ trả về todo vừa tạo (có id mới)
            const finalTodo = todos.find(t => t.id === newTodo.id) // tránh trùng id với todo cũ 
                ? { ...newTodo, id: Date.now() }
                : newTodo;

            // Cập nhật UI: Thêm vào đầu danh sách
            setTodos([finalTodo, ...todos]);
            setTitle(""); // Reset form
        } catch (err) {
            alert(err.message);
        } finally {
            setIsLoading(false); // Kết thúc submit
        }
    }

    // 3. DELETE: Xóa todo (Áp dụng Optimistic UI -> cập nhật lại UI ngay lập tức)
    async function deleteTodo(id) {
        const oldTodos = [...todos];

        // Optimistic UI: Xóa trên giao diện trước để người dùng thấy nhanh
        setTodos(todos.filter(todo => todo.id !== id));

        try {
            const res = await fetch(`${url}/${id}`, {
                method: 'DELETE'
            });

            if (!res.ok) {
                throw new Error("Xóa không thành công");
            }
        } catch (err) {
            alert(err.message);
            setTodos(oldTodos); // rollback
        }
    }

    return (
        <div>
            <p>Số lượng todo hiện tại: {todos.length}</p>

            {/* Form thêm mới */}
            <form onSubmit={addTodo}>
                <input type="text" value={title} placeholder="Nhập việc cần làm..." disabled={isLoading} onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" disabled={isLoading || !title}>
                    {isLoading ? "Đang thêm..." : "Thêm todo"}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Hiển thị danh sách */}
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <p>{todo.title}</p>
                        <button onClick={() => deleteTodo(todo.id)}>Xóa todo</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchApiAdvanced;
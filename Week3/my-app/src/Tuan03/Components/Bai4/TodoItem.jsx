import { memo } from "react";
function TodoItem({ task, index, deleteToDo }) {
    console.log("Render Item: ", index);

    return (
        <div>
            <span>- {task}</span>
            <button onClick={() => deleteToDo(index)}>Xóa</button>
        </div>
    )
}

export default memo(TodoItem); // bọc TodoItem bằng memo để tránh render lại khi props không thay đổi
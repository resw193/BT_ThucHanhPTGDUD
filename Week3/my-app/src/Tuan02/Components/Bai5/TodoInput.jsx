import { useState } from "react";

function TodoInput({ addToDo }) {
    const [text, setText] = useState('');

    function addTask() {
        if (text == "") {
            alert("Vui lòng nhập công việc!");
            return;
        }    

        addToDo(text);
        setText('');
    }

    return (
        <div>
            <input type="text" placeholder="Nhập công việc mới" onChange={(e) => setText(e.target.value)} />
            <button onClick={addTask}>Thêm công việc</button>
        </div>
    )
}

export default TodoInput;
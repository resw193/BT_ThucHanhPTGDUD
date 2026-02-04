import './CounterApp.css';
import { useState } from 'react';

function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-app">
            <p className={count > 10 ? "red" : ""}>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => count <= 0 ? alert("Không thể giảm thêm vì count >= 0") : setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default CounterApp;
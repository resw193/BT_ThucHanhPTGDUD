import { useRef, useState } from "react";
import './StopWatch.css';

function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lapName, setLapName] = useState('');
    const [laps, setLaps] = useState([]);

    const timeRef = useRef(null); // intervalid
    const inputRef = useRef(null); // tham chiếu -> input LapName

    // Start đồng hồ
    const start = () => {
        if (isRunning) return;

        setIsRunning(true);
        timeRef.current = setInterval(() => {
            setTime(previousTime => previousTime + 10); // cập nhật mỗi 0.01s
        }, 10)
    }

    // Pause đồng hồ
    const pause = () => {
        setIsRunning(false);
        clearInterval(timeRef.current);
    }

    // Reset đồng hồ
    const reset = () => {
        pause();
        setTime(0);
        setLaps([]);
    }

    // Thêm lap (lapName)
    const addLap = () => {
        if (lapName.trim() === '') return;

        const newLap = {
            name: lapName,
            recordedTime: time
        };

        setLaps([...laps, newLap]);
        setLapName('');

        // focus sau khi add lap
        inputRef.current.focus();
    }


    return (
        <div className="stopwatch-container">
            <h2>{time} ms</h2>

            <div className="button-group">
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>

            <input type='text' placeholder="Lap name..." value={lapName} ref={inputRef} onChange={(e) => setLapName(e.target.value)} />
            <button onClick={addLap}>Add Lap</button>

            <div className='lap-history'>
                <h3>Lịch sử danh sách vòng:</h3>
                <ul>
                    {laps.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>: {(item.recordedTime / 1000).toFixed(2)}s
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default StopWatch;
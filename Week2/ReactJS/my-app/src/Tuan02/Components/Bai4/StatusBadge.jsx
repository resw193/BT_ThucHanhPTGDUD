import { useState } from "react";
import './StatusBadge.css';

function StatusBadge(props) {
    const [status, setStatus] = useState(props.trangThai);

    return (
        <div>
            <div className={`badge ${status}`}></div>
            
            <button onClick={() => setStatus('online')}>Online</button>
            <button onClick={() => setStatus('offline')}>Offline</button>
            <button onClick={() => setStatus('busy')}>Busy</button>
        </div>
    )
}

export default StatusBadge;
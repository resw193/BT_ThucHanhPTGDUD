import { useReducer, useState } from "react";
import './FetchUserStateMachine.css';

function FetchUserStateMachine() {
    // Khởi tạo state ban đầu
    const initState = {
        data: [],
        status: 'idle',
        error: null
    };

    // Hàm reducer để quản lý các trạng thái (State Machine) - Pure Function
    function reducer(state, action) {
        switch (action.type) {
            case 'FETCH_START':
                return {
                    ...state,
                    status: 'loading',
                    error: null
                };

            case 'FETCH_SUCCESS':
                return {
                    ...state,
                    status: 'success',
                    data: action.payload
                };

            case 'FETCH_ERROR':
                return {
                    ...state,
                    status: 'error',
                    error: action.payload
                };

            default:
                return state;
        }
    }

    // useReducer
    const [state, dispatch] = useReducer(reducer, initState);

    // Call API để fetch dữ liệu người dùng
    const getUsers = async () => {
        // Gửi bắt đầu
        dispatch({ type: 'FETCH_START' });

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Lỗi! Không thể lấy dữ liệu của người dùng.');
            }

            const usersData = await response.json();

            // Gửi thành công
            dispatch({ type: 'FETCH_SUCCESS', payload: usersData });
        } catch (error) {
            // Gửi lỗi
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };

    return (
        <div className="container">
            <h2>Quản lý User (State Machine)</h2>

            {/* State: IDLE */}
            {state.status === 'idle' && (
                <div className="box">
                    <p>Chưa có dữ liệu.</p>
                    <button onClick={getUsers}>Tải danh sách</button>
                </div>
            )}

            {/* State: LOADING */}
            {state.status === 'loading' && (
                <div className="box">
                    <p className="loading-text">Waiting: Đang tải dữ liệu người dùng...</p>
                </div>
            )}

            {/* State: ERROR */}
            {state.status === 'error' && (
                <div className="box error">
                    <p>Lỗi: {state.error}</p>
                    <button onClick={getUsers}>Thử lại (Retry)</button>
                </div>
            )}

            {/* Trạng thái SUCCESS (Thành công) */}
            {state.status === 'success' && (
                <div className="user-list">
                    <h3>Danh sách {state.data.length} người dùng:</h3>
                    <ul>
                        {state.data.map(user => (
                            <li key={user.id}>
                                <strong>{user.name}</strong> - {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default FetchUserStateMachine;
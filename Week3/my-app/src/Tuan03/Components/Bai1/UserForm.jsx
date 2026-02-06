import { useState } from "react";
import './UserForm.css';

function UserForm() {
    const [data, setData] = useState({
        name: '',
        email: '',
        age: '',
    }); 

    const changeValueOfKey = (e) => {
        const { name, value } = e.target; // ô đang nhập
        
        setData({...data, [name]: value });
   }

    return (
        <div className='user-form'>
            <h2>Thông tin người dùng</h2>
            <form>
                <input type="text" name='name' placeholder='Tên người dùng...' value={data.name} onChange={changeValueOfKey} /> <br />
                <input type="email" name='email' placeholder='Email...' value={data.email} onChange={changeValueOfKey} /> <br />
                <input type="number" name='age' placeholder='Tuổi...' value={data.age} onChange={changeValueOfKey} /> <br />
            </form>

            <div className="user-info">
                <h3>==============</h3>

                <p>Tên: {data.name}</p>
                <p>Email: {data.email}</p>
                <p>Tuổi: {data.age}</p>

                <h3>==============</h3>
            </div>
        </div>
    )
}

export default UserForm;
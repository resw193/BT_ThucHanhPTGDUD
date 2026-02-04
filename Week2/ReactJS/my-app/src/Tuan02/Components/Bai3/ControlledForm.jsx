import { useState } from "react";
import './ControlledForm.css';

function ControlledForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="controlled-form">
            <h2>Controlled Form</h2>
            <form>
                <div className='form-input'>
                    <input type="text" placeholder="Nhập tên..." onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='form-input'>
                    <input type="email" placeholder="Nhập email..." onChange={(e) => setEmail(e.target.value)} />
                </div>
            </form>
            
            <div className='info'>
                <h3>Thông tin bạn đã nhập:</h3>
                <p>Tên: <span>{name}</span></p>
                <p>Email: <span>{email}</span></p>
            </div>
        </div>
    )
}

export default ControlledForm;
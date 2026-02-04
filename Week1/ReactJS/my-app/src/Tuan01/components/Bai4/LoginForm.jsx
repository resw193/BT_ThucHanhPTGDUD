import './LoginForm.css';

function LoginForm(props) {
    if (!props.show) return null;

    return (
        <div className='container-overlay'>
            <form className={`login-box ${props.type}`}>
                <span className="close" onClick={props.onClose}>×</span>

                <h2>login</h2>
                <div className="input-form">
                    <input type="text" placeholder='Username...' />
                    <input type="password" placeholder='Password...' />
                </div>
                
                <button className="btn-login">Login</button>
            </form>
        </div>
    )
}
export default LoginForm;
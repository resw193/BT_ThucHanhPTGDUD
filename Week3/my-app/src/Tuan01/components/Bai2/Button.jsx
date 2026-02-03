import './Button.css'

function Button(props) {
    return (
        <div>
            <button className={`btn btn-${props.type}`}>{props.text}</button>
        </div>
    )
}

export default Button
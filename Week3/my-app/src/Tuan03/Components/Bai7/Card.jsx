import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";

function Card() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="card">
            <p style={{ color: '#000' }}>Giao diện hiện tại: <strong>{theme.toUpperCase()}</strong></p>

            <Button></Button>
        </div>
    )
}

export default Card;
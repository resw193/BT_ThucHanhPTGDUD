import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"

function Button() {
    // Lấy theme và hàm toggle
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} >Chuyển sang {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
    );
}

export default Button;
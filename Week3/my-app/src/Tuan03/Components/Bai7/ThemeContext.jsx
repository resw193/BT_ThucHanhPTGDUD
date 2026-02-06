import { createContext, useState, useEffect } from "react";


// Tạo Context
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("app_theme");
        return savedTheme || "light";
    });

    // Đổi theme
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";

            return newTheme;
        });
    };

    // Khi theme đổi, lưu ngay vào localStorage
    useEffect(() => {
        localStorage.setItem("app_theme", theme);
    }, [theme]);

    return (
        // Phát dữ liệu (theme và hàm toggleTheme) xuống con
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

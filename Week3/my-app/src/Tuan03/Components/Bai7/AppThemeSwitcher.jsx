import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import Layout from "./Layout";
import './AppThemeSwitcher.css';

// component con
function MainContent() {
    const { theme } = useContext(ThemeContext);

    return (
        // ClassName = "app-container light" || "app-container dark"
        <div className={`app-container ${theme}`}>
            <Layout></Layout>
        </div>
    );
}

function AppThemeSwitcher() {
    return (
        <div>
            <ThemeProvider>
                <MainContent></MainContent>
            </ThemeProvider>
        </div>
    )
}

export default AppThemeSwitcher;
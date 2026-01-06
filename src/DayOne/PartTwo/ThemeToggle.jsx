import React from 'react';

function ThemeToggle() {
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <>
            <h2>Theme</h2>
            <p>{darkMode ? "Dark" : "Light"}</p>
            <button onClick={() => setDarkMode(!darkMode)}>
                Toggle Theme
            </button>
        </>
    );
}
export default ThemeToggle;
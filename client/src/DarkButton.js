import React from 'react';
import useDarkMode from './hooks/useDarkMode';


const DarkButton = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className="dark-mode__toggle">
          <button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}>Enable Dark Mode</button>
        </div>
    )
  
}

export default DarkButton;
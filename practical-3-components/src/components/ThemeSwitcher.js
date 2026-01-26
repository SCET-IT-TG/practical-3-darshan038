import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeStyles = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
    padding: '40px',
    borderRadius: '8px',
    textAlign: 'center',
    transition: '0.3s'
  };

  return (
    <div style={themeStyles}>
      <p>This is a preview of the theme switcher component.</p>
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{
          backgroundColor: '#4fc3f7',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};
export default ThemeSwitcher;
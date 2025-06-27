import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <div style={{ textAlign: 'right', padding: '1rem 2rem' }}>
    <label>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />{' '}
      Dark Mode
    </label>
  </div>
);

export default ThemeToggle;
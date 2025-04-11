import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ToggleThemeMode = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleDarkMode}
      className="w-12 h-12 bg-neutral-900 dark:bg-white  rounded-full text-white dark:text-black font-semibold text-sm cursor-pointer"
    >
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default ToggleThemeMode;

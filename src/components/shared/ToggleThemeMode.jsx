import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { RiSunFill, RiMoonLine } from '@remixicon/react';

const ToggleThemeMode = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="cursor-pointer transition-transform duration-300 transform hover:rotate-90"
    >
      {darkMode ? <RiSunFill /> : <RiMoonLine />}
    </button>
  );
};

export default ToggleThemeMode;

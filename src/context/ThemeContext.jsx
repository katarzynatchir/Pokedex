import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  //Tailwind: How you add the dark class to the html element is up to you, but a common approach is to use a bit of JavaScript that updates the class attribute

  const toggleDarkMode = () => {
    const root = document.documentElement;

    setDarkMode(!darkMode);

    localStorage.setItem('theme', !darkMode);

    if (darkMode) {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

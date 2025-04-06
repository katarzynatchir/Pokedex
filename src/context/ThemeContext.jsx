import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  //Tailwind: How you add the dark class to the html element is up to you, but a common approach is to use a bit of JavaScript that updates the class attribute

  const toggleDarkMode = () => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

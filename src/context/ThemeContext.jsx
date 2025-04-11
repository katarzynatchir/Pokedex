import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('darkTheme');
    return storedTheme === 'true';
    //bo musze otrzymać true lub false;
  });

  //Tailwind: How you add the dark class to the html element is up to you, but a common approach is to use a bit of JavaScript that updates the class attribute

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Zapisz do localStorage za każdym razem gdy darkMode się zmieni
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

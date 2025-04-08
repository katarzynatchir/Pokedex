import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(() => {
    const storedUser = localStorage.getItem('loggedUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <LoginContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

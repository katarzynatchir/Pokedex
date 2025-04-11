import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { SnackbarProvider } from 'notistack';
import { LoginProvider } from './context/LoginContext';

// json-server --watch db.json --port 3000

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <SnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <LoginProvider>
          <App />
        </LoginProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// Dlaczego dałam do main?
// Co robi main.jsx w Vite?

// To jest entry point całej aplikacji – wszystko, co owijasz tam w ReactDOM.createRoot, będzie dostępne wszędzie.
// Dlaczego dajemy tam:

//     BrowserRouter – bo routing dotyczy całej aplikacji

//     ThemeProvider – bo temat dotyczy całej aplikacji

//     (czasem) QueryClientProvider, AuthProvider, LocalizationProvider, itd.

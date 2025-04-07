import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

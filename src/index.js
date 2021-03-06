import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

/**
 * Custom theme designed with Material-UI Theme Creator:
 * https://bareynol.github.io/mui-theme-creator/
 */
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0BAD44',
      light: '#C7E9C0',
      contrastText: '#94E7A6',
    },
    secondary: {
      main: '#179CF0',
    },
  },
});

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

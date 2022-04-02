import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Event from './Event';
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
      main: '#94E7A6',
      light: '#C7E9C0',
      dark: '#0BAD44',
    },
    secondary: {
      main: '#FFD15D',
      dark: '#BA9746',
    },
    background: {
      default: '#FFFEF0',
    },
    text: {
      primary: '#2A4F53',
    },
    error: {
      main: '#DE5E52',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Ubuntu',
    },
    h2: {
      fontFamily: 'Satisfy',
    },
    h3: {
      fontFamily: 'Ubuntu',
      fontWeight: 600,
    },
    h4: {
      fontWeight: 200,
    },
    button: {
      fontFamily: 'Ubuntu',
      fontWeight: 500,
    },
    fontFamily: 'Ubuntu',
    body1: {
      fontFamily: 'Libre Franklin',
    },
    body2: {
      fontFamily: 'Libre Franklin',
    },
    caption: {
      fontFamily: 'Satisfy',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

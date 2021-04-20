import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import reportWebVitals from './reportWebVitals';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Quicksand',
    ],
    h3: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#28283d",
    },
  },
  overrides: {
    MuiCssBaseline: {
      backgroundColor: '#28283d'
    }
  }
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

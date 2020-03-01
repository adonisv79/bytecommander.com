import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import theme from './Theme';
import Main from './Main';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Main />
  </ThemeProvider>,
  document.getElementById('root'),
);

import React from 'react';
import { Router } from '@reach/router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Home from './components/home/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router style={{marginTop: 64}}>
        <Home path="/" />
      </Router>
    </ThemeProvider>
  );
}

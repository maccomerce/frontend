import React from 'react';
import { Redirect, Router } from '@reach/router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Home from './components/home/Home';
import NotFound from './components/common/notfound/NotFound';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router style={{marginTop: 64}}>
        <Home path="/" />
        <NotFound path="/404" />
        <Redirect from="*" noThrow to="/404" />
      </Router>
    </ThemeProvider>
  );
}

import React, { Component } from 'react';
import logo from './logo2.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar/NavBar';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ResponsiveDrawer from "./Drawer/ResponsiveDrawer";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#0bb634',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
      contrastText: '#000',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveDrawer></ResponsiveDrawer>
        {/*<NavBar />*/}
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Welcome to the future of money transfer!
            </p>🦊
            <a
              className="App-link"
              href="https://metamask.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Metamask
            </a>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ResponsiveDrawer from "./Drawer/ResponsiveDrawer";
import LoginModal from './components/LoginModal';
import getWeb3 from './components/util/getWeb3';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#0bb634',
      contrastText: '#fff',
      titleText: '#00c730',
    },
    complementary: {
      main: '#15d642',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
      contrastText: '#999',
    },
  },
});

class App extends Component {

  state = { web3: null, accounts: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Set web3 to the state
      this.setState({ web3 });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3 or accounts. Check that metamask is unlocked or console for details.`
      );
      console.log(error);
    }
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <LoginModal active={this.state.web3 == null} />
        <ResponsiveDrawer web3={this.state.web3}/>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import MainframeSDK from '@mainframe/sdk'
import Web3 from 'web3'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import LoginModal from './components/LoginModal';


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

  sdk: MainframeSDK
  web3: Web3

  state = {
    sdkWorking: false,
    account: "",
    ethBalance: 0,
    web3: null,
    accounts: null
  }


  constructor(props) {
    super(props);
    this.sdk = new MainframeSDK()
    this.web3 = new Web3(this.sdk.blockchain.getWeb3Provider())

  }

  componentDidMount() {
    if (this.sdk.blockchain.getWeb3Provider() !== null) {
      this.setState({sdkWorking: true})
    }
    this.fetchState()
    console.log("🧽")
    console.log(this.web3);
    if (this.web3 !== null){
      this.setState({ web3: this.web3 });
    }
  }

  async fetchState() {
    const accounts = await this.web3.eth.getAccounts()
    if (accounts.length) {
      const account = accounts[0]
      const weiBalance = await this.web3.eth.getBalance(account)
      const ethBalance = this.web3.utils.fromWei(weiBalance)
      this.setState({
        account,
        ethBalance,
      })
    }
  }

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

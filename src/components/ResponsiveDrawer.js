import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTime from '@material-ui/icons/AccessTime';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import Transactions from './Transactions';
import TransactionModal from './TransactionModal';
import base from '../base';
import Button from "@material-ui/core/Button/Button";


// TODO: Next steps are to create the "New" transaction overlay. It's the dialog for creating a new transaction.

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  button: {
    backgroundColor: theme.palette.complementary.main,
    color: theme.palette.complementary.contrastText,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  vertContainer: {
    display: 'table',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
  },
  vertHelper: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  vertList: {
    margin: '0 auto',
  },
  horizontalCenter: {
    margin: '15% auto',
    width: '50%',
  },
});


class ResponsiveDrawer extends React.Component {

  state = {
    mobileOpen: false,
    web3: this.props.web3,
    transactionModalOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleOpenTrandactionModal = () => {
    this.setState({ transactionModalOpen: true });
  };

  handleCloseTrandactionModal = () => {
    this.setState({ transactionModalOpen: false });
  };

  sendTransaction = (recipient, note, amount) => {
    console.log('this.state: ', this.state);
    if (this.state.network !== 'ropsten' ) { return; }
    if (!this.props.web3.utils.isAddress(recipient)) {
      alert(`Recipient was not a valid Ethereum address. Please try creating your transaction again.`);
      return;
    }

    this.setState({recipient: recipient, note: note, transactionAmount: amount});

    const weiAmount = this.props.web3.utils.toWei(amount);

    this.props.web3.eth.sendTransaction({
      from: `${this.state.accounts[0]}`,
      to: `${recipient}`,
      value: weiAmount
    })
      .once('transactionHash', this.printTransactionHash)
      .once('receipt', this.printReceipt)
      .on('confirmation', this.printConfNumber)
      .on('error', this.logError)
      .then(this.receiptWasMined);
  }

  printTransactionHash = (transactionHash) => {
    console.log('transactionHash: ', transactionHash);
    this.setState({ transactionHash, transactionModalOpen: false });
  }

  printReceipt(receipt) {
    console.log('receipt: ', receipt);
  }

  printConfNumber(confNumber, receipt){
    console.log('confNumber: ', confNumber, receipt);
  }

  logError(error){
    console.error('ERROR: ', error);
  }

  receiptWasMined = (receipt) => {
    console.log('The receipt has been mined! ', receipt);
    // will be fired once the receipt is mined

    base.post(`account_transactions/${this.state.accounts[0]}/${this.state.network}/${this.state.transactionHash}`, {
      data: {to: this.state.recipient, for: this.state.note, amount: this.state.transactionAmount, receipt: receipt }
    }).then(() => {
      console.log('🎉 saved to firebase!');
    }).catch(err => {
      // handle error
      console.error('ERROR: ', err);
    });
  }

  getBlockchainData = async () => {
    try {
      // Use web3 to get the user's accounts.
      const accounts = await this.props.web3.eth.getAccounts();
      const network = await this.props.web3.eth.net.getNetworkType();

      // Set web3 and accounts to the state
      if (!this.state.accounts || !this.state.network || this.state.accounts[0] !== accounts[0] || this.state.network !== network) {
        this.setState({ accounts, network } );
      }
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3 or accounts. Check that metamask is unlocked or console for details.`
      );
      console.log(error);
    }
  };

  render() {
    // this.sendTransaction("asd");
    const { classes, theme, web3 } = this.props;

    if (web3) {
      this.getBlockchainData();
    }

    const drawer = (
      <div>
        <div className={classes.vertContainer}>
          <div className={classes.vertHelper}>
            <List className={classes.vertList}>
              <ListItem button key="Activity">
                <ListItemIcon><AccessTime /></ListItemIcon>
                <ListItemText>Activity</ListItemText>
              </ListItem>
              <ListItem button key="Cash Card">
                <ListItemIcon><MonetizationOn /></ListItemIcon>
                <ListItemText>Cash Card</ListItemText>
              </ListItem>
              <ListItem button key="Settings">
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText>Settings</ListItemText>
              </ListItem>
              <ListItem button key="Sign Out">
                <ListItemIcon><RemoveCircleOutline /></ListItemIcon>
                <ListItemText>Sign Out</ListItemText>
              </ListItem>
            </List>
            <div className={classes.horizontalCenter}>
              <Button onClick={this.handleOpenTrandactionModal} variant="contained" size="large" className={classes.button}>
                New
              </Button>
              <TransactionModal
                web3={this.state.web3}
                transactionModalOpen={this.state.transactionModalOpen}
                handleTransactionModalClose={this.handleCloseTrandactionModal}
                handleTransactionSend={this.sendTransaction}
              />
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Paymo
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Transactions web3={this.state.web3}/>
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);

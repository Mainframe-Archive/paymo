import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// import base from '../base';
import getWeb3 from "./util/getWeb3";
// import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  innerPaper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
  paper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing.unit * 4,
  },
  button: {
    backgroundColor: theme.palette.complementary.main,
    color: theme.palette.complementary.contrastText,
  },
  modalButton: {
    margin: theme.spacing.unit,
    marginTop: 25,
    color: theme.palette.secondary.contrastText,
  },
  horizontalCenter: {
    margin: '15% auto',
    width: '50%',
  },
  modalTitle: {
    color:  theme.palette.primary.titleText,
  },
  innerButton: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.complementary.main,
    color: theme.palette.complementary.contrastText,
  },
});

class SimpleModal extends React.Component {

  state = {
    web3: this.props.web3,
    open: this.props.transactionModalOpen,
    amount: '',
    to: '',
    for: '',
    accounts:[],
    network: '',
  };


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      const network = await web3.eth.net.getNetworkType();

      // Set web3 and accounts to the state
      this.setState({ web3, accounts, network });
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.log(error);
    }
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClose = () => {
    this.props.handleTransactionModalClose();
  };

  handlePay = () => {
    this.props.handleTransactionSend(this.state.to, this.state.for, this.state.amount);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.transactionModalOpen}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <IconButton onClick={this.handleClose} color="primary" className={classes.modalButton} aria-label="Add to shopping cart">
              <CloseIcon fontSize="large" />
            </IconButton>

            <div className={classes.root}>
              <div className={classes.wrapper}>
                <Paper className={classes.innerPaper}>
                  <Grid container wrap="nowrap" spacing={16}>
                    <Grid item xs>
                      {/*<Typography>{this.state.accounts[0]}</Typography>*/}
                      <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                        <Input
                          id="adornment-amount"
                          value={this.state.amount}
                          onChange={this.handleChange('amount')}
                          startAdornment={<InputAdornment position="start">ETH</InputAdornment>}
                          placeholder={'0'}
                          required={true}
                        />
                        <TextField
                          id="outlined-to"
                          label="To"
                          className={classes.textField}
                          value={this.state.name}
                          onChange={this.handleChange('to')}
                          margin="normal"
                          variant="outlined"
                        />
                        <TextField
                          id="outlined-for"
                          label="For"
                          className={classes.textField}
                          value={this.state.for}
                          onChange={this.handleChange('for')}
                          margin="normal"
                          variant="outlined"
                        />
                        {/*<Button variant="contained" size="large" color="primary" className={classes.innerButton}>*/}
                          {/*Request*/}
                        {/*</Button>*/}
                        <Button variant="contained" size="large" color="primary" className={classes.innerButton} onClick={this.handlePay}>
                          Pay
                        </Button>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};


// We need an intermediary variable for handling the recursive nesting.
const TransactionModal = withStyles(styles)(SimpleModal);

export default TransactionModal;



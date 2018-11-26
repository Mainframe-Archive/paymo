import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
    open: this.props.active,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.active}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <div className={classes.root}>
              <div className={classes.wrapper}>
                <Paper className={classes.innerPaper}>
                  <Grid container wrap="nowrap" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h5" component="h2">
                        No ETH Account Available
                      </Typography>
                      <Typography component="p">
                        It seems that you don&apos;t have an ETH account selected. If using
                        MetaMask, please make sure that your wallet is unlocked and that
                        you have at least one account in your accounts list.
                      </Typography>
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
  active: PropTypes.bool.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const TransactionModal = withStyles(styles)(SimpleModal);

export default TransactionModal;

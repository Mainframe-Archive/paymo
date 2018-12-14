// import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import base from '../base';
import Jazzicon from './util/JazzIcon/Jazzicon';
import jsNumberForAddress from './util/JazzIcon/jsNumberForAddress';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { utils } from "web3";



const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  row: {
    fontSize: 14,
    height: 75,
  },
  fader: {
    color: '#999',
  },
  noWrap: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  address: {
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 400,
    color: '#999',
  }
});

let rowId = 0;
function createData(identifier, avatar, comment, date, value) {
  rowId += 1;
  return { rowId, identifier, avatar, comment, date, value };
}

function condenseAddress(address) {
  const len = 4;
  return address.slice(0, len + 2) + '...' + address.slice(-len, address.length)
}

class SimpleTable extends React.Component {

  state = {
    account: this.props.account,
    network: this.props.network,
    rows: [],
  };

  componentDidUpdate= async (prevProps) => {
    // Typical usage (don't forget to compare props):
    if (this.props.account !== prevProps.account || this.props.network !== prevProps.network) {
      try {
        console.log(`account_transactions/${this.props.account}/${this.props.network}`);
        base.listenTo(`account_transactions/${this.props.account}/${this.props.network}`, {
          context: this,
          asArray: true,
          then(transactionData) {
            let rows = []
            transactionData.forEach((transaction, index) => {
              const ethAmount = utils.fromWei(transaction.value);
              rows.push(createData(transaction.receipt.to, '', transaction.comment, this.formatedDate(transaction.timestamp * 1000), ethAmount))
            });
            this.setState({rows});
          }
        });
      } catch (error) {
        // Catch any errors for any of the above operations.
        console.error(error);
      }
    }
  }


  formatedDate(timestamp) {
    const today = new Date(timestamp).toLocaleDateString(undefined, {
      day : 'numeric',
      month : 'short',
    });
    return today;
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            {this.state.rows.map(row => {
              return (
                <TableRow key={row.rowId} className={classes.row}>
                  <TableCell>
                    {/*<Avatar alt={row.name} src={row.avatarURL} >{initials(row.name)}</Avatar>*/}
                    <Jazzicon diameter={50} seed={jsNumberForAddress(row.identifier)} />
                  </TableCell>
                  <TableCell className={classes.fade}>
                    <Tooltip title={row.identifier} placement="top">
                      <CopyToClipboard className={classes.address} text={row.identifier}>
                        <Button >{condenseAddress(row.identifier)}</Button>
                      </CopyToClipboard>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{row.comment}</TableCell>
                  <TableCell className={`${classes.noWrap} ${classes.fader}`}>{row.date}</TableCell>
                  <TableCell className={`${classes.noWrap} ${classes.fader}`} numeric >{row.value} Eth</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
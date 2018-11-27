import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import base from '../base';
import getWeb3 from "./util/getWeb3";

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  row: {
    display: 'flex',
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    color: '#999',
    height: 75,
  },
}))(TableCell);

const NameTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


let id = 0;
function createData(name, avatarURL, description, date, amount) {
  id += 1;
  return { id, name, avatarURL, description, date, amount };
}

const danAvatar = 'https://images-production-f.squarecdn.com/unsafe/72x0/https://franklin-assets.s3.amazonaws.com/apps/imgs/cpxmXqyosrjLWFdWz32SmH.jpeg';
const daveAvatar = 'https://images-production-f.squarecdn.com/unsafe/72x0/https://franklin-assets.s3.amazonaws.com/apps/imgs/7slho2uSf2zlr6CmHu04lH.jpeg';
const wesAvatar = 'https://images-production-f.squarecdn.com/unsafe/72x0/https://franklin-assets.s3.amazonaws.com/apps/imgs/7slho2uSf2zlr6CmHu04lH.jpeg';

const rows = [
  createData('Daniel Jensen', danAvatar, 'For maisy’s birthday party dinner', 'Aug 28', '-$38' ),
  createData('Robert Pratt', wesAvatar, 'For Nano Ledger S', 'Aug 28', '$100' ),
  createData('David Jensen', daveAvatar, 'For 🍪', 'Oct 21, 2017', '-$7' ),
  createData('David Jensen', daveAvatar, 'For pizza', 'Aug 28', '-$38' ),
  createData('Daniel Jensen', danAvatar, 'For replacement drone blades', 'Sept 5, 2018', '$10.67' ),
  createData('Chandler Hobard', '', 'Expired', 'Aug 18, 2017', '$20' ),
];

function initials(name){
  let initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  return initials;
}

class SimpleTable extends React.Component {

  state = {
    rows: []
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      const network = await web3.eth.net.getNetworkType();

      // Set web3 and accounts to the state
      this.setState({ web3, accounts, network });
      console.log(`account_transactions/${accounts[0]}/${network}`);
      base.listenTo(`account_transactions/${accounts[0]}/${network}`, {
        context: this,
        asArray: true,
        then(transactionData) {
          let rows = []
          transactionData.forEach((transaction, index) => {
            console.log(index, transaction);
            rows.push(createData(transaction.to, danAvatar, transaction.for, "Aug 12", transaction.amount))
          });
          this.setState({rows});
        }
      });
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.log(error);
    }
  };


  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            {this.state.rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell>
                    <Avatar alt={row.name} src={row.avatarURL} >{initials(row.name)}</Avatar>
                  </TableCell>
                  <NameTableCell>{row.name}</NameTableCell>
                  <CustomTableCell>{row.description}</CustomTableCell>
                  <CustomTableCell>{row.date}</CustomTableCell>
                  <CustomTableCell numeric>{row.amount}</CustomTableCell>
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

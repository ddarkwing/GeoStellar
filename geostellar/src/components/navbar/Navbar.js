import React from 'react';

import theme from '../../theme'
import Login from '../account/Login'
import AccountContext from '../../AccountContext'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const Account = React.useContext(AccountContext);
    const {publicK, setPublic} = Account

    const openLogin = () => {
        setOpen(true);
      };
    
    const closeLogin = () => {
        setOpen(false);
    };



    return (
        <div className = "navbar"
        style = {{ display: 'flex', 
        flexDirection: 'row',
        padding: '25px 100px',
        alignItems: 'center',
        justifyContent: 'space-between'}}>

            <h1>Stellar</h1>

            <div className = "navbar_selection">

                <Button variant="text" theme={theme} style={{margin: '0px 15px'}}>Market</Button>

                <Button variant="text" theme={theme} style={{margin: '0px 15px'}}>NFT</Button>

                <div>{publicK}</div>

                <Button variant="contained" startIcon={<AccountBalanceWalletIcon />}
                theme={theme} style={{borderRadius: '25px', padding: '0px 25px', height: '50px', margin: '0px 15px', rowgap: '5px'}}
                onClick={openLogin}><strong>Connect Account</strong>
                </Button>
                <Dialog open={open} onClose={closeLogin}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <DialogTitle>Select Login Type</DialogTitle>
                            <IconButton aria-label="close" onClick={closeLogin}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                        <DialogContent dividers></DialogContent>
                        <Login />
                </Dialog>
            </div>
        </div>
    )
}

export default Navbar;
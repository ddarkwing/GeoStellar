import React from 'react';

import theme from '../../theme'
import {AccountContext} from '../../Context.js';
import StellarSdk from 'stellar-sdk'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';
import AddCard from '@mui/icons-material/AddCard';
import AddCircle from '@mui/icons-material/AddCircle';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    // OPENING DIALOGS

    const [open, setOpen] = React.useState(false);
    const [openKey, setOpenKey] = React.useState(false);
    const {publicK, setPublicK} = React.useContext(AccountContext)

    const openLogin = () => {
        setOpen(true);
        if (publicK != "") {
            setOpen(false);
        }
      };
    
    const closeLogin = () => {
        setOpen(false);
    };

    const closeLoginKey = () => {
        setOpenKey(false);
    }

    // LOGIN INFORMATION

    const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");



    // Create New Keypair
    const newKeypair = () => {
        return StellarSdk.Keypair.random();
    }

    const keypair = newKeypair();

    // Create New Account Callback 
    const newAcc = (keypair) => {
        
        (async function main() {
            try {
                const response = await fetch( `https://friendbot.stellar.org?addr=${encodeURIComponent(
                    keypair.publicKey(),
                    )}`,)
                setOpen(false);
                const responseJSON = await response.json();
                console.log("SUCCESS! You have a new account :)\n", responseJSON);

                setOpenKey(true);
                setPublicK(keypair.publicKey())

            } catch (error) {
                console.log("ERROR!", error);
                setPublicK("")

            }
        })();
    }

    // Use Secret Key Callback
    const useSecretKey = () => {
        
    };

    // Get Balance of Account
    // const getBalance = (publicKey) => {
    //     (async function () {
    //         try {
    //             const account = await server.loadAccount(publicKey);
    //             account.balances.forEach(function (balance) {
    //                 if (balance.asset_type = 'native') {
    //                     return balance.balance;
    //                 }
    //             });
    //             return ;}
    //         catch {
    //             console.log("error")
    //         }
    //     });
    // }

    return (
        <div className = "navbar"
        style = {{ display: 'flex', 
        flexDirection: 'row',
        padding: '25px 100px',
        alignItems: 'center',
        justifyContent: 'space-between'}}>

            <h1>Stellar</h1>

            <div className = "navbar_selection">

                <Button variant="text" theme={theme} style={{margin: '0px 15px'}}>MAP</Button>

                <Button variant="text" theme={theme} style={{margin: '0px 15px'}}>NFT</Button>

                if 

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
                 
                        <Button onClick={() => {
                            newAcc(keypair);
                            const acc = keypair.publicKey();
                            setPublicK(acc);
                            closeLogin();
                        }} startIcon={<AddCard />}>
                        Create New Keypair</Button>

                        <TextField
                            autoFocus
                            margin="normal"
                            id="secret"
                            label="Secret Key"
                            fullWidth
                            variant="standard"
                        />

                        <Button onClick={useSecretKey} startIcon={<KeyIcon />}>
                        Login with SecretKey</Button>


            
                </Dialog>
                <Dialog open={openKey} onClose={closeLoginKey}>
                        <DialogContent>
                            Public Key: {publicK}
                        </DialogContent>

                        <DialogContent>
                            Secret Key: {keypair.secret()}
                        </DialogContent>

                </Dialog>
            </div>
        </div>
    )
}

export default Navbar;
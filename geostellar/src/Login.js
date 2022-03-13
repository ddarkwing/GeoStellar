import {AccountContext} from './Context.js';

import React, { useState, useContext } from "react";
import Button from '@mui/material/Button';
import StellarSdk from 'stellar-sdk'


const Login = () => {

    const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

    const {publicK, setPublicK} = useContext(AccountContext)

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
                const responseJSON = await response.json();
                console.log("SUCCESS! You have a new account :)\n", responseJSON);
            } catch (error) {
                console.log("ERROR!", error);
            }
        })();
    }

    // Use Secret Key Callback
    const useSecretKey = () => {
        return
    };
    
    return (
        <div>
            <Button onClick={() => {
        newAcc(keypair);
        const acc = keypair.publicKey();
        setPublicK(acc);
        }}>
            
            Create Ne Keypair {publicK}</Button>

            <Button onClick={useSecretKey}>
            Login with SecretKey</Button>
        </div>

    )
}

export default Login;
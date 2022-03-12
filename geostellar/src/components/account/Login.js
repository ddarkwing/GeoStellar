import { createContext, useState, useContext } from "react";
import Button from '@mui/material/Button';
import StellarSdk from 'stellar-sdk'

import AccountContext from '../../AccountContext'

const Login = () => {
    const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

    const Account = useContext(AccountContext);
    const {publicK, setPublic} = Account

    console.log(publicK)

    var loggedIn = false;
    var publicKey = ``;

    const newKeypair = () => {
        return StellarSdk.Keypair.random();
    }

    const [keypair, setKeypair] = useState(newKeypair)

    const newAcc = (pair) => {
        
        (async function main() {
            try {
                const response = await fetch( `https://friendbot.stellar.org?addr=${encodeURIComponent(
                    pair.publicKey(),
                    )}`,)
                const responseJSON = await response.json();
                console.log("SUCCESS! You have a new account :)\n", responseJSON);
            } catch (error) {
                console.log("ERROR!", error);
            }
        })();
    }

    const useSecretKey = () => {
        return
    };
    
    return (
        <div>
            <Button onClick={() => {
          newAcc(keypair);
          setPublic(keypair.publicKey());
        }}>
            Create new Keypair</Button>

            <Button onClick={useSecretKey}>
            Login with SecretKey</Button>
        </div>

    )
}

export default Login;
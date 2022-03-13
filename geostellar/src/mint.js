import StellarSdk from 'stellar-sdk';

// const StellarSdk = require('stellar-sdk')

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

// Keep store of each issuer for asset in database for future reference

const issuingKey = StellarSdk.Keypair.fromSecret('SCZQKI2IEW3HU762LFK7RNVA6IIVS23DFDH4JKW6Q737KLWRVT4KVFHY')

const setup = {
    fee: StellarSdk.BASE_FEE,
    networkPassphrase: StellarSdk.Networks.TESTNET
}



// Add Operations to Transaction
const add = (transaction, signers, operation) => {
    operation.forEach((op) => {
        transaction.addOperation(op);
    });
    transaction.setTimeout(100).build()
    signers.forEach((signer) => {
        transaction.sign(signer)
    });
    server.submitTransaction(transaction)
    .catch( function (error) {
        console.log("Could not complete transaction")
    });
}



var text = "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"

console.log(text.length)

// Add NFT to issuingAccount

var addImg = (txt, txtTrans, i, trans_index) => {
    while (txt.length >= 61 && trans_index != i) {
        const key = txt.slice(0,61);
        var ind = i.toString() + key;
        if (i.toString().length == 2) {
            ind = '0' + ind;
        } else if (i.toString().length == 1) {
            ind = '00' + ind
        }
        const val = txt.slice(0,125).slice(61);
        const newTxt = txt.slice(125);
        txt = newTxt;
        console.log(val)
        console.log(i)
        console.log(txt.length)
        txtTrans.addOperation(
            StellarSdk.Operation.manageData({
            name: ind,
            value: val.toString(),
            source: issuingKey.publicKey()
            })
        )
        i += 1;
    } 

    console.log("ready to submit and sign")
    if (txt.length < 125) {
        var endkey = txt.slice(0,61)
        const endval = txt.slice(61)
        
        if (endkey.length == 0) {

            if (i.toString().length == 2) {
                endkey = '0' + i.toString() + endkey;
            } else if (i.toString().length == 1) {
                endkey = '00' + i.toString() + endkey
            } else {
                endkey = i.toString() + endkey
            }

            txtTrans.addOperation(
                StellarSdk.Operation.manageData({
                    name: endkey,
                    value: endval,
                    source: issuingKey.publicKey()
                })
            );
        }
    }   
    txtTrans = txtTrans.setTimeout(400).build();
    txtTrans.sign(issuingKey);
    server.submitTransaction(txtTrans);
    return [i, txt];
}

// 12500 = 61 * 100 + 64 * 100, MAX managedata in 100 operations with 3 index digits
var i = 0;
var trans_index = 100;
console.log(text.length)

var account = await server.loadAccount(issuingKey.publicKey())
var trans =  new StellarSdk.TransactionBuilder(account, setup);
[i, text] = addImg(text, trans, i, trans_index)

console.log(text.length)
trans_index += 100;


var account = await server.loadAccount(issuingKey.publicKey())
account.incrementSequenceNumber()
var trans =  new StellarSdk.TransactionBuilder(account, setup);
[i, text] = addImg(text, trans, i, trans_index)

trans_index += 100;


var account = await server.loadAccount(issuingKey.publicKey())
account.incrementSequenceNumber()
var trans =  new StellarSdk.TransactionBuilder(account, setup);
[i, text] = addImg(text, trans, i, trans_index)





    










var Web3 = require('./lib/web3');

// dont override global variable
if (typeof window !== 'undefined') {
    if(typeof window.nekonium === 'undefined'){
        window.nekonium={};
    }
    if(typeof window.nekonium.Web3 === 'undefined'){
        window.nekonium.Web3 = Web3;
    }
    if(typeof window.Web3 === 'undefined') {
        window.Web3 = Web3;
    }
}

module.exports = Web3;

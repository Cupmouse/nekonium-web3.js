/* jshint ignore:start */


// Browser environment
if(typeof window !== 'undefined') {
    if(typeof window.nekonium === 'undefined'){
        window.nekonium={};
    }    
    window.nekonium.Web3 = (typeof window.nekonium.Web3 !== 'undefined') ? window.nekonium.Web3 : require('web3');
    window.nekonium.BigNumber = (typeof window.nekonium.BigNumber !== 'undefined') ? window.nekonium.BigNumber : require('bignumber.js');
}


// Node environment
if(typeof global !== 'undefined') {
    if(typeof global.nekonium === 'undefined'){
        global.nekonium={};
    }    
    global.nekonium.Web3 = (typeof global.nekonium.Web3 !== 'undefined') ? global.nekonium.Web3 : require('web3');
    global.nekonium.BigNumber = (typeof global.nekonium.BigNumber !== 'undefined') ? global.nekonium.BigNumber : require('bignumber.js');
}

/* jshint ignore:end */
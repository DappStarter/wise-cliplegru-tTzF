require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food cycle cruise script million guess neck equal gesture'; 
let testAccounts = [
"0x28b39a799ec49c8fc97752dc7ad5f8d136a1d0c1cb41d47a3f4e27862079bcda",
"0x89a3318e0289019387ae7add629141b47669ffac4780e00423fdb5b430aecc33",
"0x6e07bcb328ea2b0c0bca80e83833671fbd792a8eb31ddbe83710d691a51b16a1",
"0x299b29acebe508ebad5c7d8ed662134a7603c214a4492ee510a204c758021f2b",
"0xf129238752c5c2c07ddd021279bdd15d76166ca48ec5d5123a4d529e8192385e",
"0xa7ad7355147bbc5e33f9df810fd28876c8fb90f6d52e225684f4f2461ccbc456",
"0xa1af2bdbded12c4c376bc3af78a45b552aab7c59866ae3898ea439b6eb0e1a88",
"0x855beb847a2407ce7b2537f8134cb11800b3a0564fcfa427fd32661605b72f92",
"0xd855807cb2cc4440aa270a712a40009202f01d4d3f38f65df44d47885ef2d214",
"0x690ffd8279433a826fb767f72925bfb1ccf926ab65673a09b55651e9a38f10ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note scrub put harvest open equal gaze'; 
let testAccounts = [
"0xdd5124821a962231bbc7e267851eeb79a346f909cb7e1263231f8070dc2bbdc1",
"0x64b1da78fd6642c48f800cbaa86edecbbcda0dd30be90958c107d7f67c94dcb6",
"0x0f160befae44accbfa1b1af5eda173e37cc8f1bffde47e5689b83b24ff1a8151",
"0xe3d22619ac219e50df8717d5ece32e67d4ae970fb6621b87ec6a6fdd0c815f2b",
"0x2358e7f64d54d653674f16354c3a633b7f3096c514cc013dd08524b7f58b159c",
"0x7ea2a24a8b607c0bf1ddbdbb83c135308a1fcfeb4098c5d4bcf63a6212bba261",
"0xdb7f5c1a9699d28c2a14f5d07100bb5590f600552ebf39ab716ae1c6be248367",
"0x008690847d06a317fedff3a8c4266ed68a2605c0b3f3402c19b8a5370bc6f392",
"0x287d95d6ecacd2b789aba965cecc3533e77b56d924e6cff16fe78e4353f49fdd",
"0xa5bfbb6cb4b014298980b8daf35f896282bff7deadae633dd8ec222d01f1acd2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



const lendABI = require('./lend.abi.json')
const usdcABI = require('./usdc.abi.json')

module.exports = {
    lend: {
        address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
        abi: lendABI
    },
    usdc: {
        address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        abi: usdcABI
    }
}
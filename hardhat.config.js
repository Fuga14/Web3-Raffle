// 14:56:35 Deploying Raffle

require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-ethers');
require('hardhat-gas-reporter');
// require('@nomiclabs/hardhat-waffle');
require('solidity-coverage');
require('hardhat-deploy');
require('hardhat-contract-sizer');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.7',
};

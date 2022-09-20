import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

module.exports = {
  solidity: "0.8.7",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL,
      accounts: [process.env.ROPSTEN_PRIVATE_KEY],
      network_id: 3,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};

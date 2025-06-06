require("dotenv").config();
require("@nomicfoundation/hardhat-ignition-ethers");

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

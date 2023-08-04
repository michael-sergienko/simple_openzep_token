require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "0x285b5d6de37f779cf32d65bda0381f8445c1b23e126c5db2e28c63b36af0477f",
      ],
    },
  },
};

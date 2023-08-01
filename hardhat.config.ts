import * as dotenv from "dotenv";
import "@nomiclabs/hardhat-ethers";
import "ethers";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
// import "solidity-coverage";
import { HardhatUserConfig, task } from "hardhat/config";
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    ganache: {
      chainId: 1337,
      url: "http://127.0.0.1:8545",
      accounts: [
        "0x5b3208286264f409e1873e3709d3138acf47f6cc733e74a6b47a040b50472fd8",
        "0xae6e55ee301653982277f9031e97e7a54ee258fd617214904baf62df3047e09b",
      ],
    },
    arbitest: {
      url: "https://arb-goerli.g.alchemy.com/v2/CrFBpClK0mgUNWsQh1l9MUvyvM1Lv1iP",
      accounts: [process.env.OWNER_KEY!],
    },
    arbitrum: {
      url: process.env.ARBITRUM_MAINNET!,
      accounts: [
        process.env.FEES!,
        process.env.WALLET!,
        process.env.OWNER_KEY!,
      ],
    },
    // mumbai: {
    //   url: "https://polygon-mumbai.g.alchemy.com/v2/7tppgB7VIMxxyc-LnQ-m9Eafy7nAp6nN",
    //   accounts: [process.env.OWNER_KEY!, process.env.BUYER_KEY!],
    // },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    customChains: [
      {
        network: "arbitrumGoerli",
        chainId: 421613,
        urls: {
          apiURL: "https://api-rinkeby.etherscan.io/api/",
          browserURL: "https://goerli.arbiscan.io",
        },
      },
    ],
  },
  // gasReporter: {
  //   enabled: true,
  //   currency: "USD",
  //   gasPriceApi : "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
  // },
  // },
};

export default config;

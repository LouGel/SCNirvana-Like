import { BigNumber } from "ethers";
import { ethers } from "hardhat";
const prompt = require("prompt");
import fs from "fs";
// import chalk from "chalk";
let owner;
async function main() {
  [owner] = ethers.getSigners();
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

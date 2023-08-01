import { ethers, upgrades } from "hardhat";
import chalk from "chalk";
import fs from "fs";
import Ethers from "@typechain/ethers-v5";

async function main() {
  const [owner] = await ethers.getSigners();
  const a = JSON.parse(fs.readFileSync("./addresses.json", "utf-8"));
  // require(a.MARKET, "Pas import");
  const VIEWER = await ethers.getContractFactory("InterfaceViewer");
  const viewer = await VIEWER.deploy(
    a.MARKET,
    a.POOL,
    a.BANK,
    a.GLA,
    a.BUYBACK,
    a.LAB,
    a.PRLAB,
    a.DSD,
    a.USDC
  );
  await viewer.deployed();

  console.log("Step " + (await viewer.connect(owner).getStep()));
  console.log("Viewer  address   " + viewer.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

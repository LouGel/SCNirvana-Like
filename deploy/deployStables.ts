import { ethers } from "hardhat";

async function main() {
  const USDC = await ethers.getContractFactory("USDC");
  const ORDER = await ethers.getContractFactory("DSD");
  const Lab = await ethers.getContractFactory("Lab");
  const PRLab = await ethers.getContractFactory("prLab");
  const usdc = await USDC.deploy();
  await usdc.deployed();
  console.log("USDC deployed at : ", usdc.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const addresses = JSON.parse(fs.readFileSync("../addresses.json", "utf-8"));
  const [owner] = await ethers.getSigners();
  const GLA = await ethers.getContractFactory("StakePool");
  const gla = new ethers.Contract(
    addresses.GLA,
    GLA.interface,
    ethers.getDefaultProvider()
  );
  
  
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
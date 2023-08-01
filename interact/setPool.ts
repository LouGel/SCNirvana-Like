import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const addresses = JSON.parse(fs.readFileSync("../addresses.json", "utf-8"));
  const [owner] = await ethers.getSigners();
  const POOL = await ethers.getContractFactory("StakePool");
  const pool = new ethers.Contract(
    addresses.POOL,
    POOL.interface,
    ethers.getDefaultProvider()
  );
  await pool
    .connect(owner)
    .setOptions(2000, 30000, owner.address, 300, 400, false);
  await pool.connect(owner).add(100, addresses.LAB, true);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

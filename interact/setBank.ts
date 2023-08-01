import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const addresses = JSON.parse(fs.readFileSync("../addresses.json", "utf-8"));
  const [owner] = await ethers.getSigners();
  const BANK = await ethers.getContractFactory("Bank");
  const bank = new ethers.Contract(
    addresses.BANK,
    BANK.interface,
    ethers.getDefaultProvider()
  );
  await bank.connect(owner).setOptions(owner.address, 300);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

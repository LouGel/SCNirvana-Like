import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const addresses = JSON.parse(fs.readFileSync("../addresses.json", "utf-8"));
  const [owner] = await ethers.getSigners();
  const MARKET = await ethers.getContractFactory("Market");
  const market = new ethers.Contract(
    addresses.MARKET,
    MARKET.interface,
    ethers.getDefaultProvider()
  );

  console.log("looooooool" + (await market.connect(owner).f()));
  await market.connect(owner).setFeeOptions(owner.address, 50, 200);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

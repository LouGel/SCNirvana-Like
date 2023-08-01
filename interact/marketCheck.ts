import { Contract, utils } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const MARKET = await ethers.getContractFactory("Market");

  const market = new Contract(
    "0x00f0385120383EfCdc2c26EbB2a9A99aA0145f29",
    MARKET.interface
  );

  console.log(await market.connect(owner).setMarketOptions(400, 3200, 32));
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers } from "hardhat";
// USDC deployed at :  0x4B7892843b81c68C53F5d791584dfcD4BC1d6039
// DSD deployed at :  0x6b4fc5aD860E69a492A715625b06794c938D32fc
// Lab deployed at :  0xADFcE30a925Dce4DDDE9DCa38E0a2c9BAb43a296
// prLab deployed at :  0x6260799826F38833CBF1BA921d6CA0508B3f14aE
// Pool deployed at :  0x0bAF9F8b6A21892264802046D777b22d8Cf484B0
async function main() {
  const pool = "0x0bAF9F8b6A21892264802046D777b22d8Cf484B0";
  const dsd = "0x6b4fc5aD860E69a492A715625b06794c938D32fc";
  const BANK = await ethers.getContractFactory("Bank");
  const bank = await BANK.deploy(dsd, pool);

  await bank.deployed();
  console.log("Bank deployed at : ", bank.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

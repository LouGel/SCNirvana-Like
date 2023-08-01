import { ethers } from "hardhat";

async function main() {
  const lab = "0xADFcE30a925Dce4DDDE9DCa38E0a2c9BAb43a296";
  const prLab = "0x6260799826F38833CBF1BA921d6CA0508B3f14aE";
  const POOL = await ethers.getContractFactory("StakePool");
  const pool = await POOL.deploy(lab, prLab);

  await pool.deployed();
  console.log("Pool deployed at : ", pool.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

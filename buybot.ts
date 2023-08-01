import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import fs from "fs";

const wait = (ms: any) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const a = JSON.parse(fs.readFileSync("./addresses.json", "utf-8"));
  const [owner] = await ethers.getSigners();
  const BUYBACK = await ethers.getContractFactory("BuyBack");
  const USDC = await ethers.getContractFactory("USDC");
  const LAB = await ethers.getContractFactory("Lab");
  const buyback = new ethers.Contract(a.BUYBACK, BUYBACK.interface, owner);
  const lab = new ethers.Contract(a.LAB, LAB.interface, owner);
  const usdc = new ethers.Contract(a.USDC, USDC.interface, owner);
  let labBal = await lab.balanceOf(owner.address);
  //   const txAppawait usdc.approve(a.BUYBACK, labBal);
  await lab.approve(a.BUYBACK, BigNumber.from(2).pow(256).sub(1));
  let labUsdc = await usdc.balanceOf(owner.address);
  console.log(
    "BEFORe\nUSDC: " +
      ethers.utils.formatEther(ethers.BigNumber.from(labUsdc).mul(1e12)) +
      "\nLAB : " +
      ethers.utils.formatEther(labBal)
  );
  let finish = false;
  while (!finish) {
    await wait(200);
    if (await buyback.isOpenned()) {
      const tx = await buyback.selllab(labBal, { gasPrice: 1e10 });
      tx.wait();
      finish = true;
    } else console.log("Not opened");
  }
  labBal = await lab.balanceOf(owner.address);
  labUsdc = await usdc.balanceOf(owner.address);
  console.log(
    "BEFORe\nUSDC: " +
      labUsdc.div(1e6) +
      "\nLAB : " +
      ethers.utils.formatEther(labBal)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

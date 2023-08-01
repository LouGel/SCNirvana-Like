import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const USDC = await ethers.getContractFactory("USDC");
  const usdc = new ethers.Contract(
    "0x4B7892843b81c68C53F5d791584dfcD4BC1d6039",
    USDC.interface,
    ethers.getDefaultProvider()
  );
  await usdc
    .connect(owner)
    .mint(owner.address, ethers.utils.parseEther("0.880860876"));
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

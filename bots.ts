import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import fs from "fs";

const wait = (ms: any) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const a = JSON.parse(fs.readFileSync("./addresses.json", "utf-8"));
  const [owner] = await ethers.getSigners();
  const MARKET = await ethers.getContractFactory("Market");
  const price = new ethers.Contract(a.MARKET, MARKET.interface, owner);
  const date = { data: [] } as { data: Object[] };

  const GetPrices = async (data: any) => {
    const c = await price.c();
    const f = await price.f();
    const dat = Date.now();
    date.data.push(
      {
        date: dat,
        floorprice: ethers.utils.formatEther(f),
        marketprice: ethers.utils.formatEther(c),
      }!
    );
    fs.writeFile(
      "../dsd-labs-app/build/graphData.json",
      JSON.stringify(data),
      (err) => {
        if (err) console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
        }
      }
    );
  };
  while (true) {
    GetPrices(date);

    await wait(6 * 1e3);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

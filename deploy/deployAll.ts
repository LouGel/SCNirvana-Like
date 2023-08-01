import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import fs from "fs";
import { assert } from "chai";
// import chalk from "chalk";
async function main() {
  const modExport = "module.exports = ";
  const [owner] = await ethers.getSigners();
  console.log("Owner   : " + owner.address);
  if (owner.address != "0x6F1A9F951a89f679851EB501E31385Bd8bF808dE") return 1;
  const team = [
    "0x6F1A9F951a89f679851EB501E31385Bd8bF808dE",
    "0xD2113c416e436d2Ac55afB9990B7E6C99f8973ec",
    "0xE402e8876a8361cF66DAAF3c04f0547eca4F45bd",
    "0x4843957b58841917F6FAD57ed136b9bf25e9D471",
    "0x4ee2D648B50fb0a4d7cf6758bb122EBCa0dcE43d",
  ];

  const day = 3600 * 24;
  const [louis, keke, beguin, emilio, bisbis] = team;
  const USDC = await ethers.getContractFactory("USDC");
  const DSD = await ethers.getContractFactory("DSD");
  const LAB = await ethers.getContractFactory("Labs");
  const PRLab = await ethers.getContractFactory("prLab");
  const POOL = await ethers.getContractFactory("StakePool");
  const BANK = await ethers.getContractFactory("Bank");
  const MARKET = await ethers.getContractFactory("Market");
  const GLA = await ethers.getContractFactory("GenesisLaunchAuction");
  const HELPER = await ethers.getContractFactory("Helper");
  const BUYBACK = await ethers.getContractFactory("BuyBack");
  const TEAM = await ethers.getContractFactory("teamContract");
  let a;
  // if (!owner.address.includes("0xf39")) {
  a = JSON.parse(fs.readFileSync("./addresses.json", "utf-8"));
  a.USDC = "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8";
  // } else {
  //   const usdc = await USDC.deploy();
  //   a = JSON.parse(fs.readFileSync("./addressesTest.json", "utf-8"));
  //   await usdc.deployed();
  //   a.USDC = usdc.address;
  //   console.log("USDC deployed at : " + a.USDC);
  //   // console.log("USDC deployed at : ", a.USDC);
  //   // console.log("usdt deployed at : ", a.USDT);
  //   // console.log("dai deployed at : ", a.DAI);
  // }

  const dSD = await DSD.deploy();
  await dSD.deployed();
  a.DSD = dSD.address;
  console.log("DSD deployed at : ", a.DSD);
  /// MARKET INFO
  /// MARKET INFO
  /// MARKET INFO
  /// MARKET INFO
  const k = BigNumber.from("250000000000")
    .div(1e6)
    .mul("250000000000000000000000000")
    .div(1e9)
    .div(1e9)
    .div(1e3);
  const target = 500; // REVOIR
  const targetAdjusted = 700;
  const maxTargetAdjusted = 6000;
  const stableCoins = [a.USDC, a.DSD];
  const raiseStep = 500;
  const lowerStep = 100;
  const lowerInterval = 86400;
  const minTarget = 500;
  const buyFee = 50;
  const sellFee = 200;

  ///GLA infos
  ///GLA infos
  ///GLA infos
  ///GLA infos
  const toUsdc = BigNumber.from(1e6);
  const hardcap = toUsdc.mul(250_000);
  const softcap = toUsdc.mul(125_000);
  const price = String(1e3);
  const publicOffering = Math.floor(Date.parse("2022-12-04 22:00:0.0") / 1e3);
  const initInterval = day * 2;
  const unlockInterval = day * 3;

  ////BUYBack info
  const withdraw = Math.floor(Date.parse("2022-12-13 22:00:0.0") / 1e3);
  //BANK INFO
  //BANK INFO
  //BANK INFO
  const BANKFEES = 300;
  //POOL INFOS
  //POOL INFOS
  //POOL INFOS
  const MINTPERCENTPERDAY = 300;
  const BLOCKSPERDAY = 250_000;
  const POOLWITHDRAWFEE = 30;
  const POOOLMINTFEE = 40;

  const Lab = await LAB.deploy();
  await Lab.deployed();
  console.log("Lab deployed at : ", Lab.address);
  const prLab = await PRLab.deploy();
  await prLab.deployed();
  const teamArgs = [
    team,
    [20, 20, 20, 20, 20],
    dSD.address,
    Lab.address,
    prLab.address,
    a.USDC,
  ];
  const devWALLET = await TEAM.deploy(...teamArgs);
  await devWALLET.deployed();
  fs.writeFileSync(
    "./teamArgs.js",
    JSON.stringify(modExport + teamArgs + ";"),
    "utf-8"
  );

  console.log("prLab deployed at : ", prLab.address);
  const pool = await POOL.deploy(Lab.address, prLab.address);
  await pool.deployed();
  console.log("pool deployed at : ", pool.address);
  const bank = await BANK.deploy(a.DSD, a.USDC, pool.address);
  await bank.deployed();
  console.log("Bank deployed at: ", bank.address);
  const buyBackArgs = [
    withdraw as number,
    day as number,
    Lab.address as string,
    a.USDC as string,
  ] as const;
  const buyback = await BUYBACK.deploy(...buyBackArgs);
  await buyback.deployed();
  fs.writeFileSync(
    "./buybackArgs.js",
    JSON.stringify(modExport + buyBackArgs + ";"),
    "utf-8"
  );
  const marketArgs = [
    Lab.address,
    prLab.address,
    pool.address,
    bank.address,
    k,
    target,
    targetAdjusted,
    buyback.address,
    stableCoins,
  ] as const;
  const market = await MARKET.deploy(...marketArgs);
  await market.deployed();
  fs.writeFileSync(
    "./marketArgs.js",
    JSON.stringify(modExport + marketArgs + ";"),
    "utf-8"
  );
  console.log("MARKET deployed at ; ", market.address);
  // IERC20 _Lab,
  // IERC20 _USDC,
  // IMarket _market,
  // uint256 _publicOfferingEnabledAt,
  // uint256 _publicOfferingInterval,
  // uint256 _initInterval,
  // uint256 _publicOfferingPrice,
  // uint256 _softCap,
  // uint256 _hardCap
  const glaArgs = [
    Lab.address,
    a.USDC,
    market.address,
    publicOffering,
    initInterval,
    unlockInterval,
    price,
    softcap,
    hardcap,
  ] as const;
  const gla = await GLA.deploy(...glaArgs);
  await gla.deployed();
  fs.writeFileSync(
    "./glaArgs.js",
    JSON.stringify(modExport + glaArgs + ";"),
    "utf-8"
  );
  console.log("GLA started at : ", gla.address);
  const helperArgs = [
    Lab.address,
    prLab.address,
    a.DSD,
    market.address,
    bank.address,
    pool.address,
  ] as const;
  const helper = await HELPER.deploy(...helperArgs);
  await helper.deployed();
  fs.writeFileSync(
    "./helperArgs.js",
    JSON.stringify(modExport + helperArgs + ";"),
    "utf-8"
  );
  console.log("Helper deployed at  ", helper.address);
  ////
  ////General OPTIONS
  ////
  ////
  console.log("SettingGeneral options");

  await dSD.connect(owner).transferOwnership(bank.address);
  await Lab.connect(owner).setBuyBack(buyback.address);
  await Lab.connect(owner).transferOwnership(market.address);
  await prLab
    .connect(owner)
    .grantRole(
      "0x154c00819833dac601ee5ddded6fda79d9d8b506b911b3dbd54cdb95fe6c3686",
      pool.address
    );
  await bank.connect(owner).setMarketAndHelper(market.address, helper.address);
  await bank.connect(owner).setOptions(devWALLET.address, BANKFEES);
  ////
  ////MARKET OPTIONS
  ////
  ////
  console.log("Setting Market options");
  await market
    .connect(owner)
    .grantRole(
      "0x6afe9cfb47664136b26b50db67b3566cb1d289a2bee71ac01b59c95757fb24fe",
      gla.address
    );

  await market
    .connect(owner)
    .setAdjustOptions(
      minTarget,
      maxTargetAdjusted,
      raiseStep,
      lowerStep,
      lowerInterval
    );
  await market.setFeeOptions(devWALLET.address, buyFee, sellFee);
  // await market.connect(owner).setMarketOptions(400, 3200, 32);
  // market : --> Setfee Options, setAdjustOptions
  // await market.connect(ow);

  ////
  ////BUYBACK OPTIONS
  ////

  await buyback.setMarket(market.address);
  ////
  ////
  ////POOL OPTIONS
  ////
  ////
  console.log("Setting Pool options");
  await pool.connect(owner).setBank(bank.address);
  await pool.connect(owner).add(100, Lab.address, true);
  await pool
    .connect(owner)
    .setOptions(
      MINTPERCENTPERDAY,
      BLOCKSPERDAY,
      devWALLET.address,
      POOLWITHDRAWFEE,
      POOOLMINTFEE,
      false
    );
  await pool.connect(owner).setOptions(300, 280_000, a.TEAM, 30, 40, true);
  ////
  ////
  ////
  ////
  ////
  a = {
    USDC: a.USDC,
    DSD: a.DSD,
    TEAM: devWALLET.address,
    BANK: bank.address,
    POOL: pool.address,
    HELPER: helper.address,
    GLA: gla.address,
    MARKET: market.address,
    LAB: Lab.address,
    PRLAB: prLab.address,
    BUYBACK: buyback.address,
    VIEWER: "0x",
  };
  console.log("Deploying viewer");
  const VIEWER = await ethers.getContractFactory("InterfaceViewer");
  const viewerArgs = [
    a.MARKET,
    a.POOL,
    a.BANK,
    a.GLA,
    a.BUYBACK,
    a.LAB,
    a.PRLAB,
    a.DSD,
    a.USDC,
  ] as const;
  const viewer = await VIEWER.deploy(...viewerArgs);
  fs.writeFileSync(
    "./viewerArgs.js",
    JSON.stringify(modExport + viewerArgs + ";"),
    "utf-8"
  );
  await viewer.deployed();
  console.log("Viewer deployed at : ", viewer.address);
  a.VIEWER = viewer.address;

  fs.writeFileSync(
    owner.address.includes("0xf39") || owner.address.includes("0xa1")
      ? "./addressesTest.json"
      : "./addresses.json",
    JSON.stringify(a),
    "utf-8"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

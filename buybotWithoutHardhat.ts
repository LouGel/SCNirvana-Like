import { ethers } from "ethers";
const MAX = ethers.BigNumber.from(2).pow(256).sub(1);
const wait = (ms: any) => new Promise((r) => setTimeout(r, ms));

/**
 * A CHANGER , UTILISE LA TIENNE --> METAMASK clique sur le wallet , export la privateKey
 */
const privateKey =
  "7a62f5c4433d350450d0d9086679d7618efab6fd7af0be729733a57274a13667";

const addresses = {
  USDC: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
  LAB: "0x96b3d7a2749A292D74d3C2B6AF101bE76fcF1b94",
  BUYBACK: "0xad8baE880F3deec52f85325d1B97Fedcb26A3100",
};

/**
 * RENTRE UN DES TERME EN PARAMETRE ex: ts-node buybotWithoutHardhat.ts KEPKEP
 */
const APIKEYS = {
  KEPKEP: "9Iw_ff_dT6xDnSuuqK9BW_tFjk4KZ_Pa",
  BEGUIN: "7BHesrR325dcZuvFaEhCg3zzqxvPjppJ,",
  BISBIS: "ZzLUlM-A_ur0rbvG6iXGphF5M5TOY4a7",
  EMILIO: "eLmoDCt2uZPC-SQ9uDXdTGbIgvMT3Rxo",
};
const getKeys = (val: string) => {
  if (val === "KEPKEP") return APIKEYS.KEPKEP;
  else if (val === "BEGUIN") return APIKEYS.BEGUIN;
  else if (val === "BISBIS") return APIKEYS.BISBIS;
  else if (val === "EMILIO") return APIKEYS.EMILIO;
  else return null;
};
const network = ethers.providers.getNetwork("arbitrum");
const httpsProvider = new ethers.providers.AlchemyProvider(
  network,
  "9Iw_ff_dT6xDnSuuqK9BW_tFjk4KZ_Pa"
);
const wallet = new ethers.Wallet(privateKey);
const signer = wallet.connect(httpsProvider);

const erc20Abi = [
  "function name() public view returns (string)",
  "function symbol() public view returns (string)",
  "function decimals() public view returns (uint8)",
  "function totalSupply() public view returns (uint256)",
  "function balanceOf(address _owner) public view returns (uint256 balance)",
  "function transfer(address _to, uint256 _value) public returns (bool success)",
  "function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)",
  "function approve(address _spender, uint256 _value) public returns (bool success)",
  "function allowance(address _owner, address _spender) public view returns (uint256 remaining)",
];

const buybackAbi = [
  "function isOpenned() external view returns (bool)",
  "function selllab(uint256 amountToSell) external",
];
const format = ethers.utils.formatEther;
const parse = ethers.utils.parseEther;

const lab = new ethers.Contract(addresses.LAB, erc20Abi, signer);
const usdc = new ethers.Contract(addresses.USDC, erc20Abi, signer);
const buyback = new ethers.Contract(addresses.BUYBACK, buybackAbi, signer);

async function main() {
  let apiToUse;
  process.argv.forEach(function (val, index, array) {
    if (index == 2) {
      apiToUse = getKeys(val);
    }
  });
  if (!apiToUse) {
    console.log("ERRRRROR WRONG API NAME !!!!! ");
    return 1;
  }
  console.log(
    "Starting bot with this wallet --> !!!!!!!!",
    signer.address,
    "!!!!!!!!!!!!!!"
  );
  const lol = ethers.utils.formatEther(
    await lab.allowance(signer.address, addresses.BUYBACK)
  );
  if (!parseInt(lol)) {
    console.log("No allowance");
    await lab.approve(addresses.BUYBACK, MAX);
  } else {
    console.log("Already approved");
  }
  const labBalance = format(await lab.balanceOf(signer.address));
  const usdcBalance = format(await usdc.balanceOf(signer.address));
  console.log("Balance of Lab before : ", labBalance);
  console.log("Balance of Usdc before : ", usdcBalance);

  let finished = false;
  while (!finished) {
    await wait(200);
    if (await buyback.isOpenned()) {
      const tx = await buyback.selllab(labBalance, { gasPrice: 1e10 });
      tx.wait();
      finished = true;
    } else console.log("Not opened");
  }

  const labBalanceAfter = format(await lab.balanceOf(signer.address));
  const usdcBalanceAfter = format(await usdc.balanceOf(signer.address));
  console.log("Balance of Lab after : ", labBalanceAfter);
  console.log("Balance of Usdc after : ", usdcBalanceAfter);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

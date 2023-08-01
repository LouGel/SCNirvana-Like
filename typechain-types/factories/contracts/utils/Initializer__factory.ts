/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Initializer,
  InitializerInterface,
} from "../../../contracts/utils/Initializer";

const _abi = [
  {
    inputs: [],
    name: "initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class Initializer__factory {
  static readonly abi = _abi;
  static createInterface(): InitializerInterface {
    return new utils.Interface(_abi) as InitializerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Initializer {
    return new Contract(address, _abi, signerOrProvider) as Initializer;
  }
}
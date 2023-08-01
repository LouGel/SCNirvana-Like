/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "AccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IAccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "PaymentSplitter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymentSplitter__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Bank",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Bank__factory>;
    getContractFactory(
      name: "BuyBack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BuyBack__factory>;
    getContractFactory(
      name: "GenesisLaunchAuction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GenesisLaunchAuction__factory>;
    getContractFactory(
      name: "Helper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Helper__factory>;
    getContractFactory(
      name: "IBank",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBank__factory>;
    getContractFactory(
      name: "IBonds",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBonds__factory>;
    getContractFactory(
      name: "IBuyBack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBuyBack__factory>;
    getContractFactory(
      name: "IERC20BurnableMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20BurnableMinter__factory>;
    getContractFactory(
      name: "IGLA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGLA__factory>;
    getContractFactory(
      name: "IHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHelper__factory>;
    getContractFactory(
      name: "ILabs",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILabs__factory>;
    getContractFactory(
      name: "IMarket",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMarket__factory>;
    getContractFactory(
      name: "IStakePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakePool__factory>;
    getContractFactory(
      name: "InterfaceViewer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InterfaceViewer__factory>;
    getContractFactory(
      name: "Labs",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Labs__factory>;
    getContractFactory(
      name: "Market",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Market__factory>;
    getContractFactory(
      name: "DSD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DSD__factory>;
    getContractFactory(
      name: "PrLab",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PrLab__factory>;
    getContractFactory(
      name: "StakePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakePool__factory>;
    getContractFactory(
      name: "USDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDC__factory>;
    getContractFactory(
      name: "Initializer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializer__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "TeamContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TeamContract__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "AccessControlEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlEnumerable>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IAccessControlEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlEnumerable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "PaymentSplitter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymentSplitter>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Bank",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Bank>;
    getContractAt(
      name: "BuyBack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BuyBack>;
    getContractAt(
      name: "GenesisLaunchAuction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GenesisLaunchAuction>;
    getContractAt(
      name: "Helper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Helper>;
    getContractAt(
      name: "IBank",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBank>;
    getContractAt(
      name: "IBonds",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBonds>;
    getContractAt(
      name: "IBuyBack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBuyBack>;
    getContractAt(
      name: "IERC20BurnableMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20BurnableMinter>;
    getContractAt(
      name: "IGLA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGLA>;
    getContractAt(
      name: "IHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHelper>;
    getContractAt(
      name: "ILabs",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILabs>;
    getContractAt(
      name: "IMarket",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMarket>;
    getContractAt(
      name: "IStakePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakePool>;
    getContractAt(
      name: "InterfaceViewer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InterfaceViewer>;
    getContractAt(
      name: "Labs",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Labs>;
    getContractAt(
      name: "Market",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Market>;
    getContractAt(
      name: "DSD",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DSD>;
    getContractAt(
      name: "PrLab",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PrLab>;
    getContractAt(
      name: "StakePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakePool>;
    getContractAt(
      name: "USDC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDC>;
    getContractAt(
      name: "Initializer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializer>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "TeamContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TeamContract>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
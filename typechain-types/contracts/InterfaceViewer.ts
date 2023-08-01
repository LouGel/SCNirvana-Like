/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface InterfaceViewerInterface extends utils.Interface {
  functions: {
    "bank()": FunctionFragment;
    "buyback()": FunctionFragment;
    "dsd()": FunctionFragment;
    "getBorrowInfo(address)": FunctionFragment;
    "getSideBar(address)": FunctionFragment;
    "getStakeAndEarn(address)": FunctionFragment;
    "getStep()": FunctionFragment;
    "getTrade()": FunctionFragment;
    "gla()": FunctionFragment;
    "lab()": FunctionFragment;
    "market()": FunctionFragment;
    "prLab()": FunctionFragment;
    "stakePool()": FunctionFragment;
    "usdc()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bank"
      | "buyback"
      | "dsd"
      | "getBorrowInfo"
      | "getSideBar"
      | "getStakeAndEarn"
      | "getStep"
      | "getTrade"
      | "gla"
      | "lab"
      | "market"
      | "prLab"
      | "stakePool"
      | "usdc"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bank", values?: undefined): string;
  encodeFunctionData(functionFragment: "buyback", values?: undefined): string;
  encodeFunctionData(functionFragment: "dsd", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBorrowInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSideBar",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeAndEarn",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "getStep", values?: undefined): string;
  encodeFunctionData(functionFragment: "getTrade", values?: undefined): string;
  encodeFunctionData(functionFragment: "gla", values?: undefined): string;
  encodeFunctionData(functionFragment: "lab", values?: undefined): string;
  encodeFunctionData(functionFragment: "market", values?: undefined): string;
  encodeFunctionData(functionFragment: "prLab", values?: undefined): string;
  encodeFunctionData(functionFragment: "stakePool", values?: undefined): string;
  encodeFunctionData(functionFragment: "usdc", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bank", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyback", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dsd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSideBar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStakeAndEarn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStep", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTrade", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gla", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lab", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prLab", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "usdc", data: BytesLike): Result;

  events: {};
}

export interface InterfaceViewer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InterfaceViewerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bank(overrides?: CallOverrides): Promise<[string]>;

    buyback(overrides?: CallOverrides): Promise<[string]>;

    dsd(overrides?: CallOverrides): Promise<[string]>;

    getBorrowInfo(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        borrowedDsd: BigNumber;
        borrowedLimit: BigNumber;
        borrowable: BigNumber;
      }
    >;

    getSideBar(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        stakedLabs: BigNumber;
        prLabBal: BigNumber;
        dsdBal: BigNumber;
        usdcBal: BigNumber;
        labBal: BigNumber;
        withdrawable: BigNumber;
      }
    >;

    getStakeAndEarn(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        mintpercentperday: BigNumber;
        totalLabStaked: BigNumber;
        tvLocked: BigNumber;
        availableReward: BigNumber;
        totalRatio: BigNumber;
        yield: BigNumber;
        amountOfLabStaked: BigNumber;
      }
    >;

    getStep(overrides?: CallOverrides): Promise<[number]>;

    getTrade(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber
      ] & {
        c: BigNumber;
        f: BigNumber;
        tsLab: BigNumber;
        reserveValue: BigNumber;
        totalWorth: BigNumber;
        mintPercentPerday: number;
        balancoeOfProtocol: BigNumber;
        totalVolume: BigNumber;
      }
    >;

    gla(overrides?: CallOverrides): Promise<[string]>;

    lab(overrides?: CallOverrides): Promise<[string]>;

    market(overrides?: CallOverrides): Promise<[string]>;

    prLab(overrides?: CallOverrides): Promise<[string]>;

    stakePool(overrides?: CallOverrides): Promise<[string]>;

    usdc(overrides?: CallOverrides): Promise<[string]>;
  };

  bank(overrides?: CallOverrides): Promise<string>;

  buyback(overrides?: CallOverrides): Promise<string>;

  dsd(overrides?: CallOverrides): Promise<string>;

  getBorrowInfo(
    sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      borrowedDsd: BigNumber;
      borrowedLimit: BigNumber;
      borrowable: BigNumber;
    }
  >;

  getSideBar(
    sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      stakedLabs: BigNumber;
      prLabBal: BigNumber;
      dsdBal: BigNumber;
      usdcBal: BigNumber;
      labBal: BigNumber;
      withdrawable: BigNumber;
    }
  >;

  getStakeAndEarn(
    sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      mintpercentperday: BigNumber;
      totalLabStaked: BigNumber;
      tvLocked: BigNumber;
      availableReward: BigNumber;
      totalRatio: BigNumber;
      yield: BigNumber;
      amountOfLabStaked: BigNumber;
    }
  >;

  getStep(overrides?: CallOverrides): Promise<number>;

  getTrade(
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      BigNumber,
      BigNumber
    ] & {
      c: BigNumber;
      f: BigNumber;
      tsLab: BigNumber;
      reserveValue: BigNumber;
      totalWorth: BigNumber;
      mintPercentPerday: number;
      balancoeOfProtocol: BigNumber;
      totalVolume: BigNumber;
    }
  >;

  gla(overrides?: CallOverrides): Promise<string>;

  lab(overrides?: CallOverrides): Promise<string>;

  market(overrides?: CallOverrides): Promise<string>;

  prLab(overrides?: CallOverrides): Promise<string>;

  stakePool(overrides?: CallOverrides): Promise<string>;

  usdc(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    bank(overrides?: CallOverrides): Promise<string>;

    buyback(overrides?: CallOverrides): Promise<string>;

    dsd(overrides?: CallOverrides): Promise<string>;

    getBorrowInfo(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        borrowedDsd: BigNumber;
        borrowedLimit: BigNumber;
        borrowable: BigNumber;
      }
    >;

    getSideBar(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        stakedLabs: BigNumber;
        prLabBal: BigNumber;
        dsdBal: BigNumber;
        usdcBal: BigNumber;
        labBal: BigNumber;
        withdrawable: BigNumber;
      }
    >;

    getStakeAndEarn(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        mintpercentperday: BigNumber;
        totalLabStaked: BigNumber;
        tvLocked: BigNumber;
        availableReward: BigNumber;
        totalRatio: BigNumber;
        yield: BigNumber;
        amountOfLabStaked: BigNumber;
      }
    >;

    getStep(overrides?: CallOverrides): Promise<number>;

    getTrade(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber
      ] & {
        c: BigNumber;
        f: BigNumber;
        tsLab: BigNumber;
        reserveValue: BigNumber;
        totalWorth: BigNumber;
        mintPercentPerday: number;
        balancoeOfProtocol: BigNumber;
        totalVolume: BigNumber;
      }
    >;

    gla(overrides?: CallOverrides): Promise<string>;

    lab(overrides?: CallOverrides): Promise<string>;

    market(overrides?: CallOverrides): Promise<string>;

    prLab(overrides?: CallOverrides): Promise<string>;

    stakePool(overrides?: CallOverrides): Promise<string>;

    usdc(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    bank(overrides?: CallOverrides): Promise<BigNumber>;

    buyback(overrides?: CallOverrides): Promise<BigNumber>;

    dsd(overrides?: CallOverrides): Promise<BigNumber>;

    getBorrowInfo(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSideBar(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakeAndEarn(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStep(overrides?: CallOverrides): Promise<BigNumber>;

    getTrade(overrides?: CallOverrides): Promise<BigNumber>;

    gla(overrides?: CallOverrides): Promise<BigNumber>;

    lab(overrides?: CallOverrides): Promise<BigNumber>;

    market(overrides?: CallOverrides): Promise<BigNumber>;

    prLab(overrides?: CallOverrides): Promise<BigNumber>;

    stakePool(overrides?: CallOverrides): Promise<BigNumber>;

    usdc(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bank(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyback(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dsd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBorrowInfo(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSideBar(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakeAndEarn(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStep(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTrade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gla(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lab(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    market(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prLab(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usdc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

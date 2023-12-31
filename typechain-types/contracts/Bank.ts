/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface BankInterface extends utils.Interface {
  functions: {
    "DSD()": FunctionFragment;
    "USDC()": FunctionFragment;
    "available(address)": FunctionFragment;
    "borrow(uint256)": FunctionFragment;
    "borrowFee()": FunctionFragment;
    "borrowFrom(address,uint256)": FunctionFragment;
    "debt(address)": FunctionFragment;
    "dev()": FunctionFragment;
    "helper()": FunctionFragment;
    "market()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "pool()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "repay(uint256)": FunctionFragment;
    "repayWithUsdc(uint256)": FunctionFragment;
    "setMarketAndHelper(address,address)": FunctionFragment;
    "setOptions(address,uint32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "withdrawable(address)": FunctionFragment;
    "withdrawable(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DSD"
      | "USDC"
      | "available"
      | "borrow"
      | "borrowFee"
      | "borrowFrom"
      | "debt"
      | "dev"
      | "helper"
      | "market"
      | "owner"
      | "pause"
      | "paused"
      | "pool"
      | "renounceOwnership"
      | "repay"
      | "repayWithUsdc"
      | "setMarketAndHelper"
      | "setOptions"
      | "transferOwnership"
      | "unpause"
      | "withdrawable(address)"
      | "withdrawable(address,uint256)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "DSD", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "available",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "borrowFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowFrom",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "debt",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "dev", values?: undefined): string;
  encodeFunctionData(functionFragment: "helper", values?: undefined): string;
  encodeFunctionData(functionFragment: "market", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repay",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "repayWithUsdc",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketAndHelper",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOptions",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawable(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawable(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "DSD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrowFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrowFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dev", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "helper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "repayWithUsdc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketAndHelper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOptions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawable(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawable(address,uint256)",
    data: BytesLike
  ): Result;

  events: {
    "Borrow(address,uint256,uint256)": EventFragment;
    "OptionsChanged(address,uint32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Repay(address,uint256)": EventFragment;
    "RepayWithUsdc(address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OptionsChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RepayWithUsdc"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface BorrowEventObject {
  user: string;
  amount: BigNumber;
  fee: BigNumber;
}
export type BorrowEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  BorrowEventObject
>;

export type BorrowEventFilter = TypedEventFilter<BorrowEvent>;

export interface OptionsChangedEventObject {
  dev: string;
  borrowFee: number;
}
export type OptionsChangedEvent = TypedEvent<
  [string, number],
  OptionsChangedEventObject
>;

export type OptionsChangedEventFilter = TypedEventFilter<OptionsChangedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RepayEventObject {
  user: string;
  amount: BigNumber;
}
export type RepayEvent = TypedEvent<[string, BigNumber], RepayEventObject>;

export type RepayEventFilter = TypedEventFilter<RepayEvent>;

export interface RepayWithUsdcEventObject {
  user: string;
  amount: BigNumber;
}
export type RepayWithUsdcEvent = TypedEvent<
  [string, BigNumber],
  RepayWithUsdcEventObject
>;

export type RepayWithUsdcEventFilter = TypedEventFilter<RepayWithUsdcEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface Bank extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BankInterface;

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
    DSD(overrides?: CallOverrides): Promise<[string]>;

    USDC(overrides?: CallOverrides): Promise<[string]>;

    available(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    borrow(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    borrowFee(overrides?: CallOverrides): Promise<[number]>;

    borrowFrom(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    debt(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    dev(overrides?: CallOverrides): Promise<[string]>;

    helper(overrides?: CallOverrides): Promise<[string]>;

    market(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repay(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repayWithUsdc(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMarketAndHelper(
      _market: PromiseOrValue<string>,
      _helper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOptions(
      _dev: PromiseOrValue<string>,
      _borrowFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdrawable(address)"(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "withdrawable(address,uint256)"(
      user: PromiseOrValue<string>,
      amountLab: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  DSD(overrides?: CallOverrides): Promise<string>;

  USDC(overrides?: CallOverrides): Promise<string>;

  available(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  borrow(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  borrowFee(overrides?: CallOverrides): Promise<number>;

  borrowFrom(
    user: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  debt(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  dev(overrides?: CallOverrides): Promise<string>;

  helper(overrides?: CallOverrides): Promise<string>;

  market(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pool(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repay(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repayWithUsdc(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMarketAndHelper(
    _market: PromiseOrValue<string>,
    _helper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOptions(
    _dev: PromiseOrValue<string>,
    _borrowFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdrawable(address)"(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "withdrawable(address,uint256)"(
    user: PromiseOrValue<string>,
    amountLab: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    DSD(overrides?: CallOverrides): Promise<string>;

    USDC(overrides?: CallOverrides): Promise<string>;

    available(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrow(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { borrowed: BigNumber; fee: BigNumber }
    >;

    borrowFee(overrides?: CallOverrides): Promise<number>;

    borrowFrom(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { borrowed: BigNumber; fee: BigNumber }
    >;

    debt(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dev(overrides?: CallOverrides): Promise<string>;

    helper(overrides?: CallOverrides): Promise<string>;

    market(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pool(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    repay(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    repayWithUsdc(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMarketAndHelper(
      _market: PromiseOrValue<string>,
      _helper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOptions(
      _dev: PromiseOrValue<string>,
      _borrowFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    "withdrawable(address)"(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdrawable(address,uint256)"(
      user: PromiseOrValue<string>,
      amountLab: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Borrow(address,uint256,uint256)"(
      user?: null,
      amount?: null,
      fee?: null
    ): BorrowEventFilter;
    Borrow(user?: null, amount?: null, fee?: null): BorrowEventFilter;

    "OptionsChanged(address,uint32)"(
      dev?: null,
      borrowFee?: null
    ): OptionsChangedEventFilter;
    OptionsChanged(dev?: null, borrowFee?: null): OptionsChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Repay(address,uint256)"(user?: null, amount?: null): RepayEventFilter;
    Repay(user?: null, amount?: null): RepayEventFilter;

    "RepayWithUsdc(address,uint256)"(
      user?: null,
      amount?: null
    ): RepayWithUsdcEventFilter;
    RepayWithUsdc(user?: null, amount?: null): RepayWithUsdcEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    DSD(overrides?: CallOverrides): Promise<BigNumber>;

    USDC(overrides?: CallOverrides): Promise<BigNumber>;

    available(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrow(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    borrowFee(overrides?: CallOverrides): Promise<BigNumber>;

    borrowFrom(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    debt(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dev(overrides?: CallOverrides): Promise<BigNumber>;

    helper(overrides?: CallOverrides): Promise<BigNumber>;

    market(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repay(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repayWithUsdc(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMarketAndHelper(
      _market: PromiseOrValue<string>,
      _helper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOptions(
      _dev: PromiseOrValue<string>,
      _borrowFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdrawable(address)"(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdrawable(address,uint256)"(
      user: PromiseOrValue<string>,
      amountLab: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    available(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrow(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    borrowFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowFrom(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    debt(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dev(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    helper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    market(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repay(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repayWithUsdc(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMarketAndHelper(
      _market: PromiseOrValue<string>,
      _helper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOptions(
      _dev: PromiseOrValue<string>,
      _borrowFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawable(address)"(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "withdrawable(address,uint256)"(
      user: PromiseOrValue<string>,
      amountLab: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

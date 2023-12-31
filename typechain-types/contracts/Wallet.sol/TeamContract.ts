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
} from "../../common";

export interface TeamContractInterface extends utils.Interface {
  functions: {
    "buy()": FunctionFragment;
    "dsd()": FunctionFragment;
    "labs()": FunctionFragment;
    "market()": FunctionFragment;
    "payee(uint256)": FunctionFragment;
    "prLabs()": FunctionFragment;
    "realize()": FunctionFragment;
    "releasable(address)": FunctionFragment;
    "releasable(address,address)": FunctionFragment;
    "release(address)": FunctionFragment;
    "release(address,address)": FunctionFragment;
    "releaseAllErc20(address)": FunctionFragment;
    "releaseAllEth()": FunctionFragment;
    "releaseAllUsdc()": FunctionFragment;
    "released(address,address)": FunctionFragment;
    "released(address)": FunctionFragment;
    "sell()": FunctionFragment;
    "setMarket(address)": FunctionFragment;
    "shares(address)": FunctionFragment;
    "totalReleased(address)": FunctionFragment;
    "totalReleased()": FunctionFragment;
    "totalShares()": FunctionFragment;
    "usdc()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buy"
      | "dsd"
      | "labs"
      | "market"
      | "payee"
      | "prLabs"
      | "realize"
      | "releasable(address)"
      | "releasable(address,address)"
      | "release(address)"
      | "release(address,address)"
      | "releaseAllErc20"
      | "releaseAllEth"
      | "releaseAllUsdc"
      | "released(address,address)"
      | "released(address)"
      | "sell"
      | "setMarket"
      | "shares"
      | "totalReleased(address)"
      | "totalReleased()"
      | "totalShares"
      | "usdc"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "buy", values?: undefined): string;
  encodeFunctionData(functionFragment: "dsd", values?: undefined): string;
  encodeFunctionData(functionFragment: "labs", values?: undefined): string;
  encodeFunctionData(functionFragment: "market", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "prLabs", values?: undefined): string;
  encodeFunctionData(functionFragment: "realize", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releasable(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "releasable(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "release(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "release(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseAllErc20",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseAllEth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "releaseAllUsdc",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "released(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "released(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "sell", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMarket",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "shares",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReleased(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReleased()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "usdc", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dsd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "labs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prLabs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "realize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releasable(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasable(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "release(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "release(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseAllErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseAllEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseAllUsdc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "released(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "released(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMarket", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdc", data: BytesLike): Result;

  events: {
    "ERC20PaymentReleased(address,address,uint256)": EventFragment;
    "PayeeAdded(address,uint256)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "PaymentReleased(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20PaymentReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
}

export interface ERC20PaymentReleasedEventObject {
  token: string;
  to: string;
  amount: BigNumber;
}
export type ERC20PaymentReleasedEvent = TypedEvent<
  [string, string, BigNumber],
  ERC20PaymentReleasedEventObject
>;

export type ERC20PaymentReleasedEventFilter =
  TypedEventFilter<ERC20PaymentReleasedEvent>;

export interface PayeeAddedEventObject {
  account: string;
  shares: BigNumber;
}
export type PayeeAddedEvent = TypedEvent<
  [string, BigNumber],
  PayeeAddedEventObject
>;

export type PayeeAddedEventFilter = TypedEventFilter<PayeeAddedEvent>;

export interface PaymentReceivedEventObject {
  from: string;
  amount: BigNumber;
}
export type PaymentReceivedEvent = TypedEvent<
  [string, BigNumber],
  PaymentReceivedEventObject
>;

export type PaymentReceivedEventFilter = TypedEventFilter<PaymentReceivedEvent>;

export interface PaymentReleasedEventObject {
  to: string;
  amount: BigNumber;
}
export type PaymentReleasedEvent = TypedEvent<
  [string, BigNumber],
  PaymentReleasedEventObject
>;

export type PaymentReleasedEventFilter = TypedEventFilter<PaymentReleasedEvent>;

export interface TeamContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TeamContractInterface;

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
    buy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dsd(overrides?: CallOverrides): Promise<[string]>;

    labs(overrides?: CallOverrides): Promise<[string]>;

    market(overrides?: CallOverrides): Promise<[string]>;

    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    prLabs(overrides?: CallOverrides): Promise<[string]>;

    realize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "releasable(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "releasable(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "release(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "release(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    releaseAllErc20(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    releaseAllEth(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    releaseAllUsdc(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "released(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "released(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    sell(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMarket(
      _market: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalReleased()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    usdc(overrides?: CallOverrides): Promise<[string]>;
  };

  buy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dsd(overrides?: CallOverrides): Promise<string>;

  labs(overrides?: CallOverrides): Promise<string>;

  market(overrides?: CallOverrides): Promise<string>;

  payee(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  prLabs(overrides?: CallOverrides): Promise<string>;

  realize(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "releasable(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "releasable(address,address)"(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "release(address)"(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "release(address,address)"(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  releaseAllErc20(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  releaseAllEth(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  releaseAllUsdc(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "released(address,address)"(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "released(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  sell(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMarket(
    _market: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shares(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalReleased(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  usdc(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    buy(overrides?: CallOverrides): Promise<void>;

    dsd(overrides?: CallOverrides): Promise<string>;

    labs(overrides?: CallOverrides): Promise<string>;

    market(overrides?: CallOverrides): Promise<string>;

    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    prLabs(overrides?: CallOverrides): Promise<string>;

    realize(overrides?: CallOverrides): Promise<void>;

    "releasable(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasable(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "release(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "release(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    releaseAllErc20(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    releaseAllEth(overrides?: CallOverrides): Promise<void>;

    releaseAllUsdc(overrides?: CallOverrides): Promise<void>;

    "released(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "released(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sell(overrides?: CallOverrides): Promise<void>;

    setMarket(
      _market: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    usdc(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ERC20PaymentReleased(address,address,uint256)"(
      token?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null
    ): ERC20PaymentReleasedEventFilter;
    ERC20PaymentReleased(
      token?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null
    ): ERC20PaymentReleasedEventFilter;

    "PayeeAdded(address,uint256)"(
      account?: null,
      shares?: null
    ): PayeeAddedEventFilter;
    PayeeAdded(account?: null, shares?: null): PayeeAddedEventFilter;

    "PaymentReceived(address,uint256)"(
      from?: null,
      amount?: null
    ): PaymentReceivedEventFilter;
    PaymentReceived(from?: null, amount?: null): PaymentReceivedEventFilter;

    "PaymentReleased(address,uint256)"(
      to?: null,
      amount?: null
    ): PaymentReleasedEventFilter;
    PaymentReleased(to?: null, amount?: null): PaymentReleasedEventFilter;
  };

  estimateGas: {
    buy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dsd(overrides?: CallOverrides): Promise<BigNumber>;

    labs(overrides?: CallOverrides): Promise<BigNumber>;

    market(overrides?: CallOverrides): Promise<BigNumber>;

    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    prLabs(overrides?: CallOverrides): Promise<BigNumber>;

    realize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "releasable(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasable(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "release(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "release(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    releaseAllErc20(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    releaseAllEth(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    releaseAllUsdc(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "released(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "released(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sell(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMarket(
      _market: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    usdc(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dsd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    labs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    market(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    prLabs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    realize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "releasable(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "releasable(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "release(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "release(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    releaseAllErc20(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    releaseAllEth(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    releaseAllUsdc(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "released(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "released(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sell(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMarket(
      _market: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalReleased()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usdc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

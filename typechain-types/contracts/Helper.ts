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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface HelperInterface extends utils.Interface {
  functions: {
    "DSD()": FunctionFragment;
    "Lab()": FunctionFragment;
    "bank()": FunctionFragment;
    "borrowAndInvest(uint256)": FunctionFragment;
    "invest(address,uint256,uint256,bool,bool)": FunctionFragment;
    "market()": FunctionFragment;
    "pool()": FunctionFragment;
    "prLab()": FunctionFragment;
    "reinvest(address,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DSD"
      | "Lab"
      | "bank"
      | "borrowAndInvest"
      | "invest"
      | "market"
      | "pool"
      | "prLab"
      | "reinvest"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "DSD", values?: undefined): string;
  encodeFunctionData(functionFragment: "Lab", values?: undefined): string;
  encodeFunctionData(functionFragment: "bank", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowAndInvest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "invest",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(functionFragment: "market", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(functionFragment: "prLab", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reinvest",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "DSD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Lab", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bank", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowAndInvest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prLab", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reinvest", data: BytesLike): Result;

  events: {};
}

export interface Helper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HelperInterface;

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

    Lab(overrides?: CallOverrides): Promise<[string]>;

    bank(overrides?: CallOverrides): Promise<[string]>;

    borrowAndInvest(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    invest(
      token: PromiseOrValue<string>,
      tokenWorth: PromiseOrValue<BigNumberish>,
      desired: PromiseOrValue<BigNumberish>,
      borrow: PromiseOrValue<boolean>,
      loop: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    market(overrides?: CallOverrides): Promise<[string]>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    prLab(overrides?: CallOverrides): Promise<[string]>;

    reinvest(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      desired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DSD(overrides?: CallOverrides): Promise<string>;

  Lab(overrides?: CallOverrides): Promise<string>;

  bank(overrides?: CallOverrides): Promise<string>;

  borrowAndInvest(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  invest(
    token: PromiseOrValue<string>,
    tokenWorth: PromiseOrValue<BigNumberish>,
    desired: PromiseOrValue<BigNumberish>,
    borrow: PromiseOrValue<boolean>,
    loop: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  market(overrides?: CallOverrides): Promise<string>;

  pool(overrides?: CallOverrides): Promise<string>;

  prLab(overrides?: CallOverrides): Promise<string>;

  reinvest(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    desired: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DSD(overrides?: CallOverrides): Promise<string>;

    Lab(overrides?: CallOverrides): Promise<string>;

    bank(overrides?: CallOverrides): Promise<string>;

    borrowAndInvest(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    invest(
      token: PromiseOrValue<string>,
      tokenWorth: PromiseOrValue<BigNumberish>,
      desired: PromiseOrValue<BigNumberish>,
      borrow: PromiseOrValue<boolean>,
      loop: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    market(overrides?: CallOverrides): Promise<string>;

    pool(overrides?: CallOverrides): Promise<string>;

    prLab(overrides?: CallOverrides): Promise<string>;

    reinvest(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      desired: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    DSD(overrides?: CallOverrides): Promise<BigNumber>;

    Lab(overrides?: CallOverrides): Promise<BigNumber>;

    bank(overrides?: CallOverrides): Promise<BigNumber>;

    borrowAndInvest(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    invest(
      token: PromiseOrValue<string>,
      tokenWorth: PromiseOrValue<BigNumberish>,
      desired: PromiseOrValue<BigNumberish>,
      borrow: PromiseOrValue<boolean>,
      loop: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    market(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    prLab(overrides?: CallOverrides): Promise<BigNumber>;

    reinvest(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      desired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    Lab(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bank(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowAndInvest(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    invest(
      token: PromiseOrValue<string>,
      tokenWorth: PromiseOrValue<BigNumberish>,
      desired: PromiseOrValue<BigNumberish>,
      borrow: PromiseOrValue<boolean>,
      loop: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    market(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prLab(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reinvest(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      desired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

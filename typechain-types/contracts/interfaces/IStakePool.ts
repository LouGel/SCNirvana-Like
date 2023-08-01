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
} from "../../common";

export interface IStakePoolInterface extends utils.Interface {
  functions: {
    "Lab()": FunctionFragment;
    "add(uint256,address,bool)": FunctionFragment;
    "bank()": FunctionFragment;
    "blocksPerDay()": FunctionFragment;
    "claim(uint256)": FunctionFragment;
    "claimFor(uint256,address)": FunctionFragment;
    "constructor1(address,address,address,address)": FunctionFragment;
    "deposit(uint256,uint256)": FunctionFragment;
    "depositFor(uint256,uint256,address)": FunctionFragment;
    "dev()": FunctionFragment;
    "massUpdatePools()": FunctionFragment;
    "mintFee()": FunctionFragment;
    "mintPercentPerDay()": FunctionFragment;
    "pendingRewards(uint256,address)": FunctionFragment;
    "poolInfo(uint256)": FunctionFragment;
    "poolLength()": FunctionFragment;
    "prLab()": FunctionFragment;
    "set(uint256,uint256,bool)": FunctionFragment;
    "setOptions(uint32,uint256,address,uint32,uint32,bool)": FunctionFragment;
    "totalAllocPoint()": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
    "withdrawFee()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "Lab"
      | "add"
      | "bank"
      | "blocksPerDay"
      | "claim"
      | "claimFor"
      | "constructor1"
      | "deposit"
      | "depositFor"
      | "dev"
      | "massUpdatePools"
      | "mintFee"
      | "mintPercentPerDay"
      | "pendingRewards"
      | "poolInfo"
      | "poolLength"
      | "prLab"
      | "set"
      | "setOptions"
      | "totalAllocPoint"
      | "userInfo"
      | "withdraw"
      | "withdrawFee"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "Lab", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "add",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(functionFragment: "bank", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "blocksPerDay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFor",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "constructor1",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFor",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "dev", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "massUpdatePools",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mintFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintPercentPerDay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRewards",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "prLab", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setOptions",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "totalAllocPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFee",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "Lab", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bank", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blocksPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "constructor1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dev", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "massUpdatePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintPercentPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prLab", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOptions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFee",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IStakePool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStakePoolInterface;

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
    Lab(overrides?: CallOverrides): Promise<[string]>;

    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _lpToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bank(overrides?: CallOverrides): Promise<[string]>;

    blocksPerDay(overrides?: CallOverrides): Promise<[BigNumber]>;

    claim(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFor(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    constructor1(
      _Lab: PromiseOrValue<string>,
      _prLab: PromiseOrValue<string>,
      _bank: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFor(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dev(overrides?: CallOverrides): Promise<[string]>;

    massUpdatePools(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintFee(overrides?: CallOverrides): Promise<[number]>;

    mintPercentPerDay(overrides?: CallOverrides): Promise<[number]>;

    pendingRewards(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolInfo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber, BigNumber]>;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    prLab(overrides?: CallOverrides): Promise<[string]>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOptions(
      _mintPercentPerDay: PromiseOrValue<BigNumberish>,
      _blocksPerDay: PromiseOrValue<BigNumberish>,
      _dev: PromiseOrValue<string>,
      _withdrawFee: PromiseOrValue<BigNumberish>,
      _mintFee: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    userInfo(
      pool: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFee(overrides?: CallOverrides): Promise<[number]>;
  };

  Lab(overrides?: CallOverrides): Promise<string>;

  add(
    _allocPoint: PromiseOrValue<BigNumberish>,
    _lpToken: PromiseOrValue<string>,
    _withUpdate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bank(overrides?: CallOverrides): Promise<string>;

  blocksPerDay(overrides?: CallOverrides): Promise<BigNumber>;

  claim(
    _pid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFor(
    _pid: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  constructor1(
    _Lab: PromiseOrValue<string>,
    _prLab: PromiseOrValue<string>,
    _bank: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _pid: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFor(
    _pid: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dev(overrides?: CallOverrides): Promise<string>;

  massUpdatePools(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintFee(overrides?: CallOverrides): Promise<number>;

  mintPercentPerDay(overrides?: CallOverrides): Promise<number>;

  pendingRewards(
    _pid: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poolInfo(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, BigNumber, BigNumber]>;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  prLab(overrides?: CallOverrides): Promise<string>;

  set(
    _pid: PromiseOrValue<BigNumberish>,
    _allocPoint: PromiseOrValue<BigNumberish>,
    _withUpdate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOptions(
    _mintPercentPerDay: PromiseOrValue<BigNumberish>,
    _blocksPerDay: PromiseOrValue<BigNumberish>,
    _dev: PromiseOrValue<string>,
    _withdrawFee: PromiseOrValue<BigNumberish>,
    _mintFee: PromiseOrValue<BigNumberish>,
    _withUpdate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  userInfo(
    pool: PromiseOrValue<BigNumberish>,
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  withdraw(
    _pid: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFee(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    Lab(overrides?: CallOverrides): Promise<string>;

    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _lpToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    bank(overrides?: CallOverrides): Promise<string>;

    blocksPerDay(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    claimFor(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    constructor1(
      _Lab: PromiseOrValue<string>,
      _prLab: PromiseOrValue<string>,
      _bank: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFor(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    dev(overrides?: CallOverrides): Promise<string>;

    massUpdatePools(overrides?: CallOverrides): Promise<void>;

    mintFee(overrides?: CallOverrides): Promise<number>;

    mintPercentPerDay(overrides?: CallOverrides): Promise<number>;

    pendingRewards(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber, BigNumber]>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    prLab(overrides?: CallOverrides): Promise<string>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOptions(
      _mintPercentPerDay: PromiseOrValue<BigNumberish>,
      _blocksPerDay: PromiseOrValue<BigNumberish>,
      _dev: PromiseOrValue<string>,
      _withdrawFee: PromiseOrValue<BigNumberish>,
      _mintFee: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    userInfo(
      pool: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFee(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    Lab(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _lpToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bank(overrides?: CallOverrides): Promise<BigNumber>;

    blocksPerDay(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFor(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    constructor1(
      _Lab: PromiseOrValue<string>,
      _prLab: PromiseOrValue<string>,
      _bank: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFor(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dev(overrides?: CallOverrides): Promise<BigNumber>;

    massUpdatePools(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintFee(overrides?: CallOverrides): Promise<BigNumber>;

    mintPercentPerDay(overrides?: CallOverrides): Promise<BigNumber>;

    pendingRewards(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    prLab(overrides?: CallOverrides): Promise<BigNumber>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOptions(
      _mintPercentPerDay: PromiseOrValue<BigNumberish>,
      _blocksPerDay: PromiseOrValue<BigNumberish>,
      _dev: PromiseOrValue<string>,
      _withdrawFee: PromiseOrValue<BigNumberish>,
      _mintFee: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    userInfo(
      pool: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    Lab(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _lpToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bank(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blocksPerDay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFor(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    constructor1(
      _Lab: PromiseOrValue<string>,
      _prLab: PromiseOrValue<string>,
      _bank: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFor(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dev(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    massUpdatePools(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintPercentPerDay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingRewards(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolInfo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prLab(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOptions(
      _mintPercentPerDay: PromiseOrValue<BigNumberish>,
      _blocksPerDay: PromiseOrValue<BigNumberish>,
      _dev: PromiseOrValue<string>,
      _withdrawFee: PromiseOrValue<BigNumberish>,
      _mintFee: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userInfo(
      pool: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
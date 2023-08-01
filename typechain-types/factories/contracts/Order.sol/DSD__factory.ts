/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { DSD, DSDInterface } from "../../../contracts/Order.sol/DSD";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060038152602001621114d160ea1b815250604051806040016040528060038152602001621114d160ea1b815250620000646200005e6200009860201b60201c565b6200009c565b815162000079906004906020850190620000ec565b5080516200008f906005906020840190620000ec565b505050620001cf565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000fa9062000192565b90600052602060002090601f0160209004810192826200011e576000855562000169565b82601f106200013957805160ff191683800117855562000169565b8280016001018555821562000169579182015b82811115620001695782518255916020019190600101906200014c565b50620001779291506200017b565b5090565b5b808211156200017757600081556001016200017c565b600181811c90821680620001a757607f821691505b60208210811415620001c957634e487b7160e01b600052602260045260246000fd5b50919050565b610c7480620001df6000396000f3fe608060405234801561001057600080fd5b50600436106100eb5760003560e01c806370a082311161009257806370a08231146101a0578063715018a6146101c957806379cc6790146101d15780638da5cb5b146101e457806395d89b41146101ff578063a457c2d714610207578063a9059cbb1461021a578063dd62ed3e1461022d578063f2fde38b1461024057600080fd5b806306fdde03146100f0578063095ea7b31461010e57806318160ddd1461013157806323b872dd14610143578063313ce56714610156578063395093511461016557806340c10f191461017857806342966c681461018d575b600080fd5b6100f8610253565b6040516101059190610a78565b60405180910390f35b61012161011c366004610ae9565b6102e5565b6040519015158152602001610105565b6003545b604051908152602001610105565b610121610151366004610b13565b6102fd565b60405160128152602001610105565b610121610173366004610ae9565b610321565b61018b610186366004610ae9565b610343565b005b61018b61019b366004610b4f565b610359565b6101356101ae366004610b68565b6001600160a01b031660009081526001602052604090205490565b61018b610366565b61018b6101df366004610ae9565b61037a565b6000546040516001600160a01b039091168152602001610105565b6100f861038f565b610121610215366004610ae9565b61039e565b610121610228366004610ae9565b61041e565b61013561023b366004610b8a565b61042c565b61018b61024e366004610b68565b610457565b60606004805461026290610bbd565b80601f016020809104026020016040519081016040528092919081815260200182805461028e90610bbd565b80156102db5780601f106102b0576101008083540402835291602001916102db565b820191906000526020600020905b8154815290600101906020018083116102be57829003601f168201915b5050505050905090565b6000336102f38185856104cd565b5060019392505050565b60003361030b8582856105f2565b61031685858561066c565b506001949350505050565b6000336102f3818585610334838361042c565b61033e9190610bf8565b6104cd565b61034b610805565b610355828261085f565b5050565b610363338261090e565b50565b61036e610805565b6103786000610a28565b565b6103858233836105f2565b610355828261090e565b60606005805461026290610bbd565b600033816103ac828661042c565b9050838110156104115760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61031682868684036104cd565b6000336102f381858561066c565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61045f610805565b6001600160a01b0381166104c45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610408565b61036381610a28565b6001600160a01b03831661052f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610408565b6001600160a01b0382166105905760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610408565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006105fe848461042c565b9050600019811461066657818110156106595760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610408565b61066684848484036104cd565b50505050565b6001600160a01b0383166106d05760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610408565b6001600160a01b0382166107325760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610408565b6001600160a01b038316600090815260016020526040902054818110156107aa5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610408565b6001600160a01b038085166000818152600160205260408082208686039055928616808252908390208054860190559151600080516020610c1f833981519152906107f89086815260200190565b60405180910390a3610666565b6000546001600160a01b031633146103785760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610408565b6001600160a01b0382166108b55760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610408565b80600360008282546108c79190610bf8565b90915550506001600160a01b038216600081815260016020908152604080832080548601905551848152600080516020610c1f833981519152910160405180910390a35050565b6001600160a01b03821661096e5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610408565b6001600160a01b038216600090815260016020526040902054818110156109e25760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610408565b6001600160a01b0383166000818152600160209081526040808320868603905560038054879003905551858152919291600080516020610c1f83398151915291016105e5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208083528351808285015260005b81811015610aa557858101830151858201604001528201610a89565b81811115610ab7576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610ae457600080fd5b919050565b60008060408385031215610afc57600080fd5b610b0583610acd565b946020939093013593505050565b600080600060608486031215610b2857600080fd5b610b3184610acd565b9250610b3f60208501610acd565b9150604084013590509250925092565b600060208284031215610b6157600080fd5b5035919050565b600060208284031215610b7a57600080fd5b610b8382610acd565b9392505050565b60008060408385031215610b9d57600080fd5b610ba683610acd565b9150610bb460208401610acd565b90509250929050565b600181811c90821680610bd157607f821691505b60208210811415610bf257634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610c1957634e487b7160e01b600052601160045260246000fd5b50019056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220614de2a335ecb9d614b02bab31c63e33a6481bf7e03fc4ffa813aeb38055a98064736f6c634300080c0033";

type DSDConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DSDConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DSD__factory extends ContractFactory {
  constructor(...args: DSDConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DSD> {
    return super.deploy(overrides || {}) as Promise<DSD>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DSD {
    return super.attach(address) as DSD;
  }
  override connect(signer: Signer): DSD__factory {
    return super.connect(signer) as DSD__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DSDInterface {
    return new utils.Interface(_abi) as DSDInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DSD {
    return new Contract(address, _abi, signerOrProvider) as DSD;
  }
}
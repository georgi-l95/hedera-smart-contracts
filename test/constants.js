/*-
 *
 * Hedera Smart Contracts
 *
 * Copyright (C) 2023 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const Events = {
  Success: 'success',
  ResponseCode: 'ResponseCode',
  AllowanceValue: 'AllowanceValue',
  ApprovedAddress: 'ApprovedAddress',
  Approved: 'Approved',
  Frozen: 'Frozen',
  KycGranted: 'KycGranted',
  TokenCustomFees: 'TokenCustomFees',
  TokenDefaultFreezeStatus: 'TokenDefaultFreezeStatus',
  TokenDefaultKycStatus: 'TokenDefaultKycStatus',
  TokenExpiryInfo: 'TokenExpiryInfo',
  FungibleTokenInfo: 'FungibleTokenInfo',
  TokenInfo: 'TokenInfo',
  TokenKey: 'TokenKey',
  NonFungibleTokenInfo: 'NonFungibleTokenInfo',
  IsToken: 'IsToken',
  TokenType: 'TokenType',
  Approval: 'Approval',
  ApprovalForAll: 'ApprovalForAll',
  TokenCreated: 'TokenCreated',
  TokenCreatedEvent: 'tokenCreatedEvent',
  TokenInfoEvent: 'TokenInfoEvent',
  FungibleTokenInfoEvent: 'FungibleTokenInfoEvent',
  NftMinted: 'NftMinted',
  PausedToken: 'PausedToken',
  UnpausedToken: 'UnpausedToken',
  CreatedToken: 'CreatedToken',
  TransferToken: 'TransferToken',
  MintedToken: 'MintedToken',
  CallResponseEvent: 'CallResponseEvent',
  GetTokenInfo: 'GetTokenInfo',
  MintedNft: 'MintedNft',
  GetFungibleTokenInfo: 'GetFungibleTokenInfo',
  GetNonFungibleTokenInfo: 'GetNonFungibleTokenInfo',
  TinyBars: 'TinyBars',
  TinyCents: 'TinyCents',
  PseudoRandomSeed: 'PseudoRandomSeed',
};

const Path = {
  BLOCK_INFO: 'contracts/solidity/block/BlockInfo.sol:BlockInfo',
  CRYPTO_MATH: 'contracts/solidity/cryptomath/CryptoMath.sol:CryptoMath',
  ERC20Mock: 'contracts/openzeppelin/ERC-20/ERC20Mock.sol:ERC20Mock',
  ERC721Mock: 'contracts/openzeppelin/ERC-721/ERC721Mock.sol:ERC721Mock',
  HIP583_ERC20Mock: 'contracts/hip-583/ERC20Mock.sol:ERC20Mock',
  HIP583_ERC721Mock: 'contracts/hip-583/ERC721Mock.sol:ERC721Mock',
  HRC: 'contracts/hrc/HRC.sol:HRC',
  TYPE_OPS: 'contracts/solidity/typeops/TypeOps.sol:TypeOps',
  RECEIVER_PAYS:
    'contracts/solidity/signature-example/ReceiverPays.sol:ReceiverPays',
  RECEIVER: 'contracts/solidity/encoding/Receiver.sol:Receiver',
};

const Contract = {
  ERC20Mock: 'ERC20Mock',
  TokenCreateContract: 'TokenCreateContract',
  DiamondCutFacet: 'DiamondCutFacet',
  Diamond: 'Diamond',
  DiamondInit: 'DiamondInit',
  IDiamondCut: 'IDiamondCut',
  DiamondLoupeFacet: 'DiamondLoupeFacet',
  OwnershipFacet: 'OwnershipFacet',
  Test1Facet: 'Test1Facet',
  Test2Facet: 'Test2Facet',
  ERC1155Mock: 'ERC1155Mock',
  ContractTransferTx: 'ContractTransferTx',
  ERC721Contract: 'ERC721Contract',
  TokenCreateCustomContract: 'TokenCreateCustomContract',
  TokenManagementContract: 'TokenManagementContract',
  TokenQueryContract: 'TokenQueryContract',
  TokenTransferContract: 'TokenTransferContract',
  ERC20Contract: 'ERC20Contract',
  Exchange: 'Exchange',
  ExchangeV2: 'ExchangeV2',
  CounterV2: 'CounterV2',
  CounterV1: 'CounterV1',
  SafeOperations: 'SafeOperations',
  SafeViewOperations: 'SafeViewOperations',
  SafeHTS: 'SafeHTS',
  ERC20BurnableMock: 'ERC20BurnableMock',
  ERC20CappedMock: 'ERC20CappedMock',
  ERC20PausableMock: 'ERC20PausableMock',
  HRCContract: 'HRCContract',
  ExchangeRateMock: 'ExchangeRateMock',
  PrngSystemContract: 'PrngSystemContract',
  Concatenation: 'Concatenation',
  Transaction: 'Transaction',
  MessageFrameAddresses: 'MessageFrameAddresses',
  New: 'New',
  AssemblyAddress: 'AssemblyAddress',
  AddressContract: 'AddressContract',
  Recipient: 'Recipient',
  Inheritance: 'Inheritance',
  Functions: 'Functions',
  FunctionsChild: 'FunctionsChild',
  FunctionsParent: 'FunctionsParent',
  Scoping: 'Scoping',
  Arithmetic: 'Arithmetic',
  Defaults: 'Defaults',
  NonExisting: 'NonExisting',
  NonExtDup: 'NonExtDup',
  ControlStructures: 'ControlStructures',
  AssignmentReferenceTypes: 'AssignmentReferenceTypes',
  DestructuringReturns: 'DestructuringReturns',
  Panic: 'Panic',
  ReentrancyGuardTestSender: 'ReentrancyGuardTestSender',
  ReentrancyGuardTestReceiver: 'ReentrancyGuardTestReceiver',
  BlindAuction: 'BlindAuction',
  SimpleAuction: 'SimpleAuction',
  MyCustomTransparentUpgradeableProxy: 'MyCustomTransparentUpgradeableProxy',
  Box: 'Box',
  BoxV2: 'BoxV2',
  Encoding: 'Encoding',
  Sender: 'Sender',
  ErrorsExternal: 'ErrorsExternal',
  Errors: 'Errors',
  Main: 'Main',
  Base: 'Base',
  Modifiers: 'Modifiers',
  DerivedContract: 'DerivedContract',
  Token: 'Token',
  PaymentChannel: 'PaymentChannel',
  Precompiles: 'Precompiles',
  CryptoUnits: 'CryptoUnits',
  TimeUnits: 'TimeUnits',
  Ballot: 'Ballot',
  Bitwise: 'Bitwise',
  ContractCaller: 'ContractCaller',
  TargetContract: 'TargetContract',
  ContractCreator: 'ContractCreator',
  DataAllocation: 'DataAllocation',
  MathCoverage: 'MathCoverage',
  TransactionInfo: 'TransactionInfo',
  AccessControlContract: 'AccessControlContract',
  BeaconContract: 'MyBeacon',
  LogicContractV1: 'LogicContractV1',
  LogicContractV2: 'LogicContractV2',
  BeaconProxyContract: 'MyProxy',
  ContractCreatorOZCreate2: 'ContractCreatorOZCreate2',
  ERC20VotesTest: 'ERC20VotesTest',
  Test_ERC165: 'Test_ERC165',
  ClimberSelector: 'ClimberSelector',
  ERC1820Registry: 'ERC1820Registry',
  ERC777SenderHookImpl: 'ERC777SenderHookImpl',
  ERC777RecipientHookImpl: 'ERC777RecipientHookImpl',
  ERC777Token: 'ERC777Token',
  ERC777ContractAccount: 'ERC777ContractAccount',
  ERC1155Token: 'ERC1155Token',
  VoteV1: 'VoteV1',
  VoteV2: 'VoteV2',
  VoteProxy: 'VoteProxy',
  ERC2612Test: 'ERC2612Test',
  ERC2771ContextTest: 'ERC2771ContextTest',
  ERC2771ForwardTest: 'ERC2771ForwardTest',
  ERC2981Test: 'ERC2981Test',
  TokenVault: 'TokenVault',
  VestingWallet: 'VestingWallet',
  MulticallTest: 'MulticallTest',
  CrowdFund: 'CrowdFund',
  PausableTest: 'PausableTest',
  SafeCastTest: 'SafeCastTest',
  VaultV1: 'VaultV1',
  VaultV2: 'VaultV2',
  ShanghaiOpcodes: 'ShanghaiOpcodes',
  Counter: 'Counter',
  EcrecoverCaller: 'EcrecoverCaller',
  InvalidERC721Receiver: 'InvalidERC721Receiver',
  ValidERC721Receiver: 'ValidERC721Receiver',
  ExampleGovernor: 'ExampleGovernor',
  ExampleTokenVote: 'ExampleTokenVote',
  Purchase: 'Purchase',
};

const CALL_EXCEPTION = 'CALL_EXCEPTION';
const CONTRACT_REVERT_EXECUTED_CODE = -32008;
const GAS_LIMIT_1_000_000 = { gasLimit: 1_000_000 };
const GAS_LIMIT_10_000_000 = { gasLimit: 10_000_000 };
const GAS_LIMIT_800000 = { gasLimit: 800000 };
const GAS_LIMIT_8000000 = { gasLimit: 8000000 };
const TOKEN_NAME = 'tokenName';
const TOKEN_SYMBOL = 'tokenSymbol';
const TX_SUCCESS_CODE = 22;
const SECOND = (WEI = 1);
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const GWEI = 1e9;

module.exports = {
  Events,
  Path,
  Contract,
  CALL_EXCEPTION,
  CONTRACT_REVERT_EXECUTED_CODE,
  GAS_LIMIT_1_000_000,
  GAS_LIMIT_10_000_000,
  GAS_LIMIT_800000,
  GAS_LIMIT_8000000,
  TOKEN_NAME,
  TOKEN_SYMBOL,
  TX_SUCCESS_CODE,
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  WEI,
  GWEI,
};

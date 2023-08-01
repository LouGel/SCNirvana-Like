// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

interface IBuyBack {
  function dayOfBuyBack() external view returns (uint256);

  function sellLab(uint256) external;

  function mixTime(string calldata) external;

  function setStable(address[] calldata) external;

  function isOpenned() external view returns (bool);
}

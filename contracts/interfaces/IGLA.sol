// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

interface IGLA {
  function publicOfferingEnabledAt() external view returns (uint);

  function initAt() external view returns (uint);

  function unlockAt() external view returns (uint);

  function initialized() external view returns (bool);

  //ie6
  function publicOfferingPrice() external view returns (uint256);

  function softCap() external view returns (uint256);

  function hardcap() external view returns (uint256);

  function publicOfferingTotalShares() external view returns (uint256);

  function publicOfferingSharesOf(address) external view returns (uint256);

  function totalCap() external view returns (uint256);

  function publicOfferingBuy(uint256) external;

  /**
   * @dev Get total supply(1e6).
   */
  function totalSupply() external view returns (uint256);

  function getPublicOfferingPrice() external view returns (uint256);

  /**
   * @dev Get total supply(1e18).
   */
  function getTotalSupply() external view returns (uint256);

  function getPhase() external view returns (uint256);

  function initialize() external;

  function estimateClaim(address) external view returns (uint256);

  function claim() external;

  function estimateWithdraw(address) external view returns (uint256);

  function withdraw() external;
}

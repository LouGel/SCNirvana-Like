// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "./IERC20BurnableMinter.sol";
import "./IStakePool.sol";
import "./IMarket.sol";

interface IBank {
  // DSD token address
  function DSD() external view returns (IERC20BurnableMinter);

  // Market contract address
  function market() external view returns (IMarket);

  // StakePool contract address
  function pool() external view returns (IStakePool);

  // helper contract address
  function helper() external view returns (address);

  // user debt
  function debt(address user) external view returns (uint256);

  // developer address
  function dev() external view returns (address);

  // fee for borrowing DSD
  function borrowFee() external view returns (uint32);

  /**
   * @dev Constructor.
   * NOTE This function can only called through delegatecall.
   * @param _DSD - DSD token address.
   * @param _market - Market contract address.
   * @param _pool - StakePool contract address.
   * @param _helper - Helper contract address.
   * @param _owner - Owner address.
   */
  function constructor1(
    IERC20BurnableMinter _DSD,
    IMarket _market,
    IStakePool _pool,
    address _helper,
    address _owner
  ) external;

  /**
   * @dev Set bank options.
   *      The caller must be owner.
   * @param _dev - Developer address
   * @param _borrowFee - Fee for borrowing DSD
   */
  function setOptions(address _dev, uint32 _borrowFee) external;

  /**
   * @dev Calculate the amount of Lab that can be withdrawn.
   * @param user - User address
   */
  function withdrawable(address user) external view returns (uint256);

  /**
   * @dev Calculate the amount of Lab that can be withdrawn.
   * @param user - User address
   * @param amountLab - User staked Lab amount
   */
  function withdrawable(address user, uint256 amountLab)
    external
    view
    returns (uint256);

  /**
   * @dev Calculate the amount of DSD that can be borrowed.
   * @param user - User address
   */
  function available(address user) external view returns (uint256);

  /**
   * @dev Borrow DSD.
   * @param amount - The amount of DSD
   * @return borrowed - Borrowed DSD
   * @return fee - Borrow fee
   */
  function borrow(uint256 amount)
    external
    returns (uint256 borrowed, uint256 fee);

  /**
   * @dev Borrow DSD from user and directly mint to msg.sender.
   *      The caller must be helper contract.
   * @param user - User address
   * @param amount - The amount of DSD
   * @return borrowed - Borrowed DSD
   * @return fee - Borrow fee
   */
  function borrowFrom(address user, uint256 amount)
    external
    returns (uint256 borrowed, uint256 fee);

  /**
   * @dev Repay DSD.
   * @param amount - The amount of DSD
   */
  function repay(uint256 amount) external;

  /**
   * @dev Triggers stopped state.
   *      The caller must be owner.
   */
  function pause() external;

  /**
   * @dev Returns to normal state.
   *      The caller must be owner.
   */
  function unpause() external;
}

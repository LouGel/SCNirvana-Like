// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "./interfaces/IMarket.sol";
import "./interfaces/IGLA.sol";
import "./interfaces/IBuyBack.sol";

contract InterfaceViewer {
  IMarket public immutable market;
  IStakePool public immutable stakePool;
  IGLA public immutable gla;
  IBank public immutable bank;
  IBuyBack public immutable buyback;
  IERC20 public immutable lab;
  IERC20 public immutable prLab;
  IERC20 public immutable dsd;
  IERC20 public immutable usdc;

  constructor(
    IMarket _market,
    IStakePool _stakePool,
    IBank _bank,
    IGLA _gla,
    IBuyBack _buyback,
    IERC20 _lab,
    IERC20 _prLab,
    IERC20 _dsd,
    IERC20 _usdc
  ) {
    market = _market;
    stakePool = _stakePool;
    lab = _lab;
    prLab = _prLab;
    dsd = _dsd;
    usdc = _usdc;
    buyback = _buyback;
    gla = _gla;
    bank = _bank;
  }

  function getTrade()
    public
    view
    returns (
      uint256 c,
      uint256 f,
      uint256 tsLab,
      uint256 reserveValue,
      uint256 totalWorth,
      uint32 mintPercentPerday,
      uint256 balancoeOfProtocol,
      uint256 totalVolume
    )
  {
    address market_ = address(market);
    c = market.c();
    f = market.f();
    totalWorth = market.w();
    tsLab = lab.totalSupply();
    reserveValue = usdc.balanceOf(market_) * 1e12;
    mintPercentPerday = stakePool.mintPercentPerDay();
    balancoeOfProtocol = lab.balanceOf(address(stakePool));
    totalVolume = market.totalVolume();
  }

  function getSideBar(address sender)
    public
    view
    returns (
      uint256 stakedLabs,
      uint256 prLabBal,
      uint256 dsdBal,
      uint256 usdcBal,
      uint256 labBal,
      uint256 withdrawable
    )
  {
    (stakedLabs, ) = stakePool.userInfo(0, sender);
    prLabBal = prLab.balanceOf(sender);
    dsdBal = dsd.balanceOf(sender);
    labBal = lab.balanceOf(sender);
    usdcBal = usdc.balanceOf(sender);
    withdrawable = bank.withdrawable(sender);
  }

  function getStep() public view returns (uint8) {
    if (buyback.isOpenned()) {
      return 5;
    } else if (buyback.dayOfBuyBack() < block.timestamp) {
      return 4;
    } else if (market.paused()) {
      return 3;
    } else if (market.f() > 0) {
      return 2;
    } else if (gla.publicOfferingEnabledAt() < block.timestamp) {
      return 1;
    } else {
      return 0;
    }
  }

  function getStakeAndEarn(address sender)
    public
    view
    returns (
      uint256 mintpercentperday,
      uint256 totalLabStaked,
      uint256 tvLocked,
      uint256 availableReward,
      uint256 totalRatio,
      uint256 yield,
      uint256 amountOfLabStaked
    )
  {
    uint256 ts = lab.totalSupply();
    (, , , uint256 accPerShare) = stakePool.poolInfo(0);
    mintpercentperday = stakePool.mintPercentPerDay();
    totalLabStaked = lab.balanceOf(address(stakePool));
    tvLocked = (totalLabStaked * market.c()) / 1e18;
    availableReward = stakePool.pendingRewards(0, sender);
    totalRatio = ts > 0 //stakePool.pendingRewards(0, sender);
      ? (totalLabStaked * 1e4) / ts
      : 0;
    yield = totalLabStaked * accPerShare;
    (amountOfLabStaked, ) = stakePool.userInfo(0, sender);
  }

  function getBorrowInfo(address sender)
    public
    view
    returns (
      uint256 borrowedDsd,
      uint256 borrowedLimit,
      uint256 borrowable
    )
  {
    borrowable = bank.available(sender);
    borrowedDsd = bank.debt(sender);
    borrowedLimit = borrowable + borrowedDsd;
  }
}

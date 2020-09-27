const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1600789440,
  hardCapTimer: 43200,
  softCap: ether("500"),
};

config.redeemer = {
  redeemBP: 1000,
  redeemInterval: 3600,
  bonusRangeStart: [
    ether("0"),
    ether("200"),
    ether("500"),
    ether("1000")
  ],
  bonusRangeBP: [
    2500,
    2000,
    1500,
    1000
  ],
};

config.presale = {
  maxBuyPerAddress: ether("25"),
  uniswapEthBP: 5000,
  uniswapLidEthBP: 1000,
  lidEthBP: 500,
  referralBP: 250,
  hardcap: ether("2000"),
  token: "0x80f7415dac9a37e168047eb56a25032b5fe216cc",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2",
  marketingFund: "0x73fbb1cA57500F13f8BD1d34435C49d8ABC66CB1",
  projectFund: "0x293D19C04d7b76f3e426CF71333E5ed5e0218c32",
  teamFund: "0x736857A7B90E972f000A4cee789ffbcFCcDbecF7",
  lidLiqLocker: "0x5d05eEF83499789fD2d3e6b2A7483430B40A0325",
  tokenPoolsBP: {
    marketing: 500,
    team: 1000,
    lidFee: 100,
    project: 3859,
    liquidity: 1284,
    presale: 3000,
    lidLiq: 257
  }
};

config.timelock = {
  releaseInterval: 2592000,
  releaseBP: 1000
}

module.exports = config;

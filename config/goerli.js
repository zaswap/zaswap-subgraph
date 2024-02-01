/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "goerli",
  wNativeAddress: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6", // WETH
  v3: {
    wNativeStablePoolAddress: "0xa65189352ec441fc904ecfb4dc3fe4ca0e308ddc", // WETH/USDT 0.01
    stableIsToken0: false,
    factoryAddress: "0xefdb0cf8c43b6e8f3161f43356e264660b035841",
    startBlock: 9241288,
    stableCoins: [
      "0xc9bf39dc444aca5668e71c6abb2314bccef11e94", // USDT
      "0xb14f1b77279714bb6ed16db37de02323dde92556", // USDC
      "0xc128fa46f2c09375924745f4fee9e9904769cb64", // BUSD
    ],
    whitelistAddresses: [
      "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6", // WETH
      "0xc9bf39dc444aca5668e71c6abb2314bccef11e94", // USDT
      "0xb14f1b77279714bb6ed16db37de02323dde92556", // USDC
      "0xc128fa46f2c09375924745f4fee9e9904769cb64", // BUSD
      "0xffb926fd11b26ff7a9450a2d1b25a8dc4e56cb62", // BTC
    ],
    nonfungiblePositionManagerAddress: "0x5c22a9973859a03a7ea8c7ada68e2d144f8cc229",
    nonfungiblePositionManagerStartBlock: 9241316,
    minETHLocked: 30,
  },
};

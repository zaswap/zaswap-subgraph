/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "bsc",
  wNativeAddress: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", // WBNB
  v3: {
    wNativeStablePoolAddress: "0xb2eda24de118ef4f0804695f8fb783047cdc5ed0", // WBNB USDT 0.01%
    stableIsToken0: true,
    factoryAddress: "0xab23a03793b88f241ab7fa8e388364bfd207463d",
    startBlock: 29281718,
    stableCoins: [
      "0x55d398326f99059ff775485246999027b3197955", // USDT
      "0xe9e7cea3dedca5984780bafc599bd69add087d56", // BUSD
      "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", // USDC
    ],
    whitelistAddresses: [
      "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", // WBNB
      "0x55d398326f99059ff775485246999027b3197955", // USDT
      "0xe9e7cea3dedca5984780bafc599bd69add087d56", // BUSD
      "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", // USDC
      "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", // BTCB
      "0x2170ed0880ac9a755fd29b2688956bd959f933f8", // WETH
    ],
    nonfungiblePositionManagerAddress: "0x91cc663f86d9acb26e3908a05d885f4135214408",
    nonfungiblePositionManagerStartBlock: 29281738,
    minETHLocked: 10,
  },
};

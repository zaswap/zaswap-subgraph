/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "x1-test",
  wNativeAddress: "0x61845bc7aaaf25f91f01e01333ff597568eca32b", // WOKB
  v3: {
    wNativeStablePoolAddress: "0xce928f3b8c8f5fae5a785d4d081a34fbff1f45af", // WBNB USDT 250
    stableIsToken0: true,
    factoryAddress: "0x80348c8b23520f8b5eb37a241eff65192c7b8b20",
    startBlock: 8707659,
    stableCoins: [
      "0x5c34063de8a7f872af9769836f549e2325546d12", // TEST USDT
    ],
    whitelistAddresses: [
      "0x61845bc7aaaf25f91f01e01333ff597568eca32b", // WOKB
      "0x5c34063de8a7f872af9769836f549e2325546d12", // USDT
      "0x448a461cdb3fc09ed0f6f1e73dbab52636bc91ec", // Test TOKEN
    ],
    nonfungiblePositionManagerAddress: "0xde8555bebe86db80f0abf5838d2c4beaa0373aa5",
    nonfungiblePositionManagerStartBlock: 8707659,
    minETHLocked: 10,
  },
};

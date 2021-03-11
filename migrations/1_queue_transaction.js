const MasterChef = artifacts.require("MasterChef");
const Timelock = artifacts.require("Timelock");

module.exports = async function (deployer, network) {
  const AUTO = `0xa184088a740c695e156f91f5cc086a06bb78b827`;
  const ETA = parseInt(Date.now() / 1000) + 2 * 86400 + 60;
};

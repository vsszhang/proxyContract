const { ethers, upgrades } = require('hardhat');

async function main() {
    const owner = await ethers.getSigner(0);
    const StoreNum = await ethers.getContractFactory('StoreNum', owner);

    const beacon = await upgrades.deployBeacon(StoreNum);
    await beacon.deployed();
    console.log('StoreNum Beacon deployed to: ', beacon.address);

    const beaconProxy = await upgrades.deployBeaconProxy(beacon.address, StoreNum);
    await beaconProxy.deployed();
    console.log('StoreNum Beacon Proxy deployed to: ', beaconProxy.address);
}

main();
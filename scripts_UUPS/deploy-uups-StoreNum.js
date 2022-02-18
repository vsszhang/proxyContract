const { ethers, upgrades } = require('hardhat');

async function main() {
    const owner = await ethers.getSigner(0);
    const UUPS_StoreNumber = await ethers.getContractFactory('UUPS_StoreNumber', owner);

    const uupsProxy = await upgrades.deployProxy(UUPS_StoreNumber, { kind: 'uups' });
    await uupsProxy.deployed();
    console.log('uups proxy deployed to: ', uupsProxy.address);
}

main();
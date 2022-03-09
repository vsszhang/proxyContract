const { ethers, upgrades } = require('hardhat');
const PROXY_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

async function mian() {
    const [ owner, newAdmin ] = await ethers.getSigners();
    // must use newAdmin to upgrade contract
    const StoreNumV2 = await ethers.getContractFactory('StoreNumV2', newAdmin);

    const storeNumV2 = await upgrades.upgradeProxy(
        PROXY_ADDRESS,
        StoreNumV2
    );

    console.log('Upgrade suceessfully!');
    // storeNumV2 equal to PROXY_ADDRESS
    console.log('storeNumV2', storeNumV2.address);
    console.log('PROXY_ADDRESS: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0');
}

mian();
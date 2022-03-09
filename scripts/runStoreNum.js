///
/// @author vsszhang
/// @dev Interacting with StoreNum contract
///
const { ethers } = require('hardhat');
const PROXY_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

async function main() {
    const owner = await ethers.getSigner(0);
    const StoreNum = await ethers.getContractFactory('StoreNumV2', owner);
    const storeNum = await StoreNum.attach(PROXY_ADDRESS);
    await storeNum._setz(4);

    console.log('x is: ', (await storeNum.getx()).toString());
    console.log('z is: ', (await storeNum.getz()).toString());
}

main();
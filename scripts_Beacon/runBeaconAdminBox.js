///
/// @author vsszhang
/// @dev run AdminBox Contract of version 1
///
const { ethers } = require('hardhat');

async function main() {
    const owner = await ethers.getSigner(0);
    const AdminBox = await ethers.getContractFactory('AdminBox', owner);
    const adminBox = await AdminBox.attach('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0');

    await adminBox.store(5);
    console.log('value: ', (await adminBox.retrieve()).toString());
}

main();
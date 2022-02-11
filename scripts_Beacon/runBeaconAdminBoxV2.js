///
/// @author vsszhang
/// @dev run AdminBox Contract of version 2
///
const { ethers } = require('hardhat');

async function main() {
    const owner = await ethers.getSigner(0);
    const AdminBoxV2 = await ethers.getContractFactory('AdminBoxV2', owner);
    const adminBox = await AdminBoxV2.attach('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0');

    // await adminBox.store(5);
    console.log('value: ', (await adminBox.retrieve()).toString());
    await adminBox.increment(10);
    console.log('call increment function(+10)...');
    console.log('value: ', (await adminBox.retrieve()).toString());
}

main();
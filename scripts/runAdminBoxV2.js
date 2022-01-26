const { ethers } = require('hardhat');

async function main() {
    const owner = await ethers.getSigners();
    // TODO:Why not get AdminBox contractFactory
    const AdminBoxV2 = await ethers.getContractFactory('AdminBoxV2', owner);
    const adminBox = await AdminBoxV2.attach('0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6');

    // Interact with new version contract
    console.log('_value: ', (await adminBox.retrieve()).toString());
    // console.log('Increment 5...');
    // await adminBox.increment(5);
    // console.log('_value: ', (await adminBox.retrieve()).toString());
}

main();
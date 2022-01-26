const { ethers } = require('hardhat');

async function main() {
    const owner = await ethers.getSigners();
    const AdminBox = await ethers.getContractFactory('AdminBox', owner);
    const adminBox = await AdminBox.attach('0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6');

    // Interact with contract
    await adminBox.store(1);
    console.log("_value: ", (await adminBox.retrieve()).toString());
}

main();
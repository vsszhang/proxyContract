const { ethers, upgrades } = require('hardhat');

async function main() {
    const owner = await ethers.getSigners();
    const AdminBoxV2 = await ethers.getContractFactory('AdminBoxV2', owner);
    const adminBox = await upgrades.upgradeProxy(
        '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
        AdminBoxV2
    );
    await adminBox.deployed();
    console.log('Upgrade to V2!');
}

main();
///
/// @author vsszhang
/// @dev Using this script for upgradeing beacon, so all of proxies will upgrade
/// to the new implementation contract.
///
const { ethers, upgrades } = require('hardhat');

async function main() {
    const owner = await ethers.getSigner(0);
    const AdminBoxV2 = await ethers.getContractFactory('AdminBoxV2', owner);

    await upgrades.upgradeBeacon('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512', AdminBoxV2);
    console.log('Beacon upgraded!');
}

main();
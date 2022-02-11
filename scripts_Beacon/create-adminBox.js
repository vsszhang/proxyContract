///
/// @author vsszhang
/// @dev Using this script for deploying a beacon and beacon's proxy.
/// @notice beacon address:0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
/// adminBox deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
///
const { ethers, upgrades } = require("hardhat");

async function main() {
    const owner = await ethers.getSigners();
    const AdminBox = await ethers.getContractFactory('AdminBox', owner);

    const beacon = await upgrades.deployBeacon(AdminBox);
    await beacon.deployed();
    console.log("Beacon deployed to: ", beacon.address);

    const adminBox = await upgrades.deployBeaconProxy(beacon.address,
        AdminBox,
        ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266']);
    await adminBox.deployed();
    console.log('Implementation Contract Address(AdminBox): ', adminBox.address);
}

main();
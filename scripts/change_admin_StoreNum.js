///
/// @author vsszhang
/// @dev Changes the admin for a specific proxy and the owner of the proxy admin
/// contract
///
const { ethers, upgrades } = require('hardhat');
const PROXY_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

async function main() {
    const [ admin, newAdmin ] = await ethers.getSigners();
    // origin admin is contract owner
    console.log('origin admin: ', admin.address);
    console.log('new admin: ', newAdmin.address);

    await upgrades.admin.changeProxyAdmin(PROXY_ADDRESS, newAdmin.address);
    console.log('Changed proxy admin!');

}

main();
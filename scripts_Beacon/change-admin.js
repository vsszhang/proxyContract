///
/// @author vsszhang
/// @dev in this script i will see u Beacon can not use changeProxyAdmin function
///

const { ethers, upgrades } = require('hardhat');
const PROXY_ADDRESS = '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6';
const BEACON_ADDRESS = '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853';
// you need run deploy script to get PROXY_ADDRESS and BEACON_ADDRESS

async function main() {
    const [ owner, newAdmin ] = await ethers.getSigners();
    await upgrades.admin.changeProxyAdmin(PROXY_ADDRESS, newAdmin.address);
    console.log('Change Proxy Admin to: ', newAdmin.address);
}

main();
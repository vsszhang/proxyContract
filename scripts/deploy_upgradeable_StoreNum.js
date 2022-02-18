///
/// @author vsszhang
/// @dev use normal proxy(uups or transparent)
/// @notice storeNum proxy deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
///
const { ethers, upgrades } = require('hardhat');
const fs = require('fs');

async function main() {
    const owner = await ethers.getSigner(0);
    const StoreNum = await ethers.getContractFactory('StoreNum', owner);

    const storeNumProxy = await upgrades.deployProxy(StoreNum);
    await storeNumProxy.deployed();
    console.log('storeNum proxy deployed to: ', storeNumProxy.address);
    // const owner = {
    //     "admin": user1.address
    // }
    // const ownerAddress = JSON.stringify(owner, null, 4);

    // fs.writeFile('data.json', ownerAddress, {flag: 'a+'}, (err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("JSON data is saved.");
    // })
}

main();
///
/// @author vsszhang
/// @dev box implementation contract address: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
/// owner address: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
///
const { ethers, upgrades } = require('hardhat');

async function main() {
    const owner = await ethers.getSigners();
    // console.log('Owner address: ', owner.address);

    const AdminBox = await ethers.getContractFactory("AdminBox", owner);
    console.log('Deploying...');
    const adminBox = await upgrades.deployProxy(AdminBox, ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'], { initializer: 'initialize' });
    await adminBox.deployed();
    console.log("AdminBox deployed to: ", adminBox.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
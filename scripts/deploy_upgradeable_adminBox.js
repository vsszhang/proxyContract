///
/// @author vsszhang
/// @dev box implementation contract address: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
/// owner address: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
/// adminBox implementation contract address: 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6
///
/// @notice the deployProxy function will return a contract instance with 
/// the proxy address and the implementation interface.
///
const { ethers, upgrades } = require('hardhat');

async function main() {
    const owner = await ethers.getSigners();

    const AdminBox = await ethers.getContractFactory("AdminBox", owner);
    console.log('Deploying...');
    const adminBox = await upgrades.deployProxy(AdminBox, ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'], { initializer: 'initialize' });
    await adminBox.deployed();

    // print adminBox contract proxy address
    console.log("AdminBox deployed to: ", adminBox.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
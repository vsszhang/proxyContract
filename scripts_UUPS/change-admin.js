const { ethers, upgrades } = require('hardhat');
UUPS_PROXY_ADDRESS = '0x610178dA211FEF7D417bC0e6FeD39F05609AD788';

async function main() {
    const newAdmin = await ethers.getSigner(1);
    await upgrades.admin.changeProxyAdmin(UUPS_PROXY_ADDRESS, newAdmin.address);
    console.log('Admin changed to: ', newAdmin.address);
}

main();
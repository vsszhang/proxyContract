const { ethers } = require('hardhat');

async function main() {
    const owner = await ethers.getSigners();
    const Box = await ethers.getContractFactory('Box', owner);
    const box = await Box.attach('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9');

    // await box.store(11);
    console.log('Box retrieve: ', (await box.retrieve()).toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
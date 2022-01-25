const { ethers } = require('hardhat');

async function main() {
    const owner = await ethers.getSigners();

    const BoxV2 = await ethers.getContractFactory('BoxV2', owner);
    const box =  await BoxV2.attach('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9');

    console.log('_value: ', (await box.retrieve()).toString());
    await box.increment();
    console.log('Increment value...');
    console.log('_value: ', (await box.retrieve()).toString());
}

main();
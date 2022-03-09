const providerRPC = {
    development: 'http://localhost:8545',
    moonbase: 'https://rpc.api.moonbase.moonbeam.network',
};

var fs = require('fs');
var Web3 = require('web3');
var web3 = new Web3(providerRPC.development);

const accountFrom = {
    privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
};

var sourceFile = fs.readFileSync("../artifacts/contracts/Addition.sol/Addition.json");
var source = JSON.parse(sourceFile);
var abi = source.abi;
var bytecode = source.bytecode;

const main = async() => {
    console.log(`Attempting to deploy from account ${accountFrom.address}`);
    const addition = await new web3.eth.Contract(abi);
    const additionTx = await addition.deploy({
        data: bytecode,
    })
    .send({
        from: accountFrom.address,
        gas: 1500000,
        gasPrice: '30000000000000'
    })
    .on('receipt', function(receipt){
        console.log(`contract address: ${receipt.contractAddress}`);
        addition.options.address = receipt.contractAddress;
    });
    // .then(function(newContractInstance){
    //     console.log(`new contract instance address: ${newContractInstance.options.address}`)
    // });

    console.log("1");
    console.log('options.address: ', await additionTx.options.address);
    console.log('addition.address: ', await addition.options.address);
    await addition.methods.setNumber(123).send({from: accountFrom.address});
    console.log(`call contract function 'getNumber()': `, await addition.methods.getNumber().call());

};

main();
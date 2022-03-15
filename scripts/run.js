const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compile contract
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0); // Exit node process without error
    } catch(error){
        console.log(error);
        process.exit(1); // Exit node process with error
    }
}

runMain();
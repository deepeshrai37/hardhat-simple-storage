const {task}= require("hardhat/config");
task("block-number","Print current block no.").setAction(
  async (taskArgs, hre)=>{
    const blockNumber= await hre.ethers.provider.getBlockNumber();
    console.log(`Current block: ${blockNumber}`);
  }
)

module.exports={}

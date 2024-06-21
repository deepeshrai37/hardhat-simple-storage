const {ethers}= require("hardhat");
const {expect, assert}= require("chai");
describe("SimpleStorage",function (){
  let SimpleStorageFactory,simpleStorage;
  beforeEach(async function(){
  SimpleStorageFactory= await ethers.getContractFactory("SimpleStorage");
  simpleStorage=await SimpleStorageFactory.deploy();
  });// gonna tell what to do before each of our it()

  it("Should start with a fav number:0", async function(){
    const currentValue=await simpleStorage.retrieve();
    assert.equal(currentValue.toString(),"0");
  });

  it("Should update when we call store",async function(){
    const expectedValue="7";
    const transactionResponse=await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);
    const newValue=await simpleStorage.retrieve();
    assert.equal(newValue.toString(),expectedValue);
  })
})
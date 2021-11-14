const { ethers } = require("hardhat")


async function main(){

  const SuperMarioWorldOZ = await ethers.getContractFactory("SuperMarioWorldOZ")
  const SuperMarioWorldOZ = await SuperMarioWorldOZ.deploy("SuperMarioWorldOZ", "SPRM")

  await SuperMarioWorldOZ.deployed();
  console.log("Success! Contract was deployed to: ", SuperMarioWorldOZ.address);

  await SuperMarioWorldOZ.mint("https://ipfs.io/ipfs/npQmSKdSaTgjHjQTmWHLvJrovhRZtbFQKFDmn8iGMDS4RCXT")

  console.log("NFT successfully minted");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

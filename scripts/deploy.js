const hre = require("hardhat");

async function main() {
  const myToken = await hre.ethers.deployContract("Test");

  await myToken.waitForDeployment();

  console.log(`deployed to ${myToken.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
